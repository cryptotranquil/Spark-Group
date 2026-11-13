require('dotenv').config();
const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const site = require('./data/site');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.disable('x-powered-by');

app.use((req, res, next) => {
  res.set({ 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin' });
  next();
});
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
app.use(express.json({ limit: '20kb' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));

// res.page(view, locals, status): renders pages/<view>.ejs, then wraps it in layout.ejs
app.use((req, res, next) => {
  res.page = (view, locals = {}, status = 200) => {
    const data = {
      site,
      brand: site.divisions.find((d) => req.path === `/${d.slug}`)?.brand || site.brand,
      path: req.path,
      siteUrl: process.env.SITE_URL || '',
      meta: {},
      form: { values: {}, errors: {} },
      result: null,
      ...locals,
    };
    app.render(`pages/${view}`, data, (err, body) => {
      if (err) return next(err);
      res.status(status).render('layout', { ...data, body });
    });
  };
  next();
});

app.get('/', (req, res) =>
  res.page('home', {
    meta: {
      title: 'Spark Holdings | Security, cleaning and supplies in Malawi',
      description: site.description,
      image: '/img/security/lineup.jpg',
    },
  })
);

for (const d of site.divisions) {
  app.get('/' + d.slug, (req, res) =>
    res.page('division', {
      d,
      meta: { title: `${d.name} | Spark Holdings`, description: d.metaDescription, image: d.hero.src },
    })
  );
}

app.get('/contact', (req, res) => {
  const division = site.divisions.some((d) => d.slug === req.query.division) ? req.query.division : '';
  res.page('contact', {
    meta: { title: 'Contact | Spark Holdings', description: 'Reach the Lilongwe or Blantyre office, or send an enquiry about security, cleaning or supplies.' },
    form: { values: { division }, errors: {} },
  });
});

// ---- Contact form ----
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => reply(req, res, 429, { ok: false, message: 'Too many messages from this connection. Please try again in a few minutes, or call us.' }),
});

function validate(body) {
  const v = {
    name: String(body.name || '').trim(),
    email: String(body.email || '').trim(),
    phone: String(body.phone || '').trim().slice(0, 40),
    division: String(body.division || '').trim(),
    message: String(body.message || '').trim(),
  };
  const errors = {};
  if (v.name.length < 2 || v.name.length > 100) errors.name = 'Enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email) || v.email.length > 200) errors.email = 'Enter a valid email address.';
  if (v.message.length < 10) errors.message = 'Tell us a little more (at least 10 characters).';
  if (v.message.length > 3000) errors.message = 'Keep the message under 3,000 characters.';
  if (!site.divisions.some((d) => d.slug === v.division)) v.division = '';
  return { v, errors };
}

let transporter;
function getTransporter() {
  if (transporter !== undefined) return transporter;
  transporter = process.env.SMTP_HOST
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
      })
    : null;
  return transporter;
}

function recipientFor(division) {
  const key = 'MAIL_TO_' + division.toUpperCase();
  return (division && process.env[key]) || process.env.MAIL_TO || site.email;
}

// JSON for the fetch() form in site.js, a full page for browsers without JavaScript
function reply(req, res, status, payload, form) {
  if (req.accepts(['html', 'json']) === 'json') return res.status(status).json(payload);
  return res.page('contact', { meta: { title: 'Contact | Spark Holdings' }, form: form || { values: {}, errors: {} }, result: payload }, status);
}

app.post('/contact', limiter, async (req, res) => {
  const body = req.body || {};
  if (body.company_website) return reply(req, res, 200, { ok: true, message: 'Thank you. We will reply soon.' }); // honeypot

  const { v, errors } = validate(body);
  const form = { values: v, errors };
  if (Object.keys(errors).length) return reply(req, res, 422, { ok: false, errors, message: 'Check the highlighted fields.' }, form);

  const mailer = getTransporter();
  if (!mailer) {
    console.error('SMTP is not configured: set SMTP_HOST in .env to send enquiries.');
    return reply(req, res, 503, { ok: false, message: `We could not send your message right now. Please email ${site.email} or call ${site.phones[0].display}.` }, form);
  }

  const label = v.division ? site.divisions.find((d) => d.slug === v.division).short : 'General';
  try {
    await mailer.sendMail({
      from: process.env.MAIL_FROM || `Spark website <${site.email}>`,
      to: recipientFor(v.division),
      replyTo: `${v.name.replace(/[\r\n<>"]/g, ' ')} <${v.email}>`,
      subject: `Website enquiry (${label}) from ${v.name.replace(/[\r\n]/g, ' ')}`,
      text: `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone || '-'}\nDivision: ${label}\n\n${v.message}\n`,
    });
    return reply(req, res, 200, { ok: true, message: 'Thank you. Your message has been sent and we will reply soon.' });
  } catch (err) {
    console.error('Mail error:', err.message);
    return reply(req, res, 502, { ok: false, message: `We could not send your message right now. Please email ${site.email} or call ${site.phones[0].display}.` }, form);
  }
});

app.use((req, res) => res.page('404', { meta: { title: 'Page not found | Spark Holdings' } }, 404));
app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) return next(err);
  res.status(500).send('Something went wrong. Please try again, or email ' + site.email);
});

app.listen(PORT, () => console.log(`Spark site running on http://localhost:${PORT}`));

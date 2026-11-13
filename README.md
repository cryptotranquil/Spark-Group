# Spark Holdings website

Express + EJS site for Spark Holdings, Spark Security Solutions and Spark Cleaning Solutions.
Built on the Scout template (BootstrapMade), restyled in the Spark navy and green.

## Run it

1. Unzip the folder and open a terminal in it.
2. Copy `.env.example` to `.env` and fill in the SMTP details (the contact form sends mail through this account).
3. Run `npm install`.
4. Run `npm start`, then open http://localhost:3000.
5. For development with auto-restart, run `npm run dev`.

## Where things are

- `data/site.js`: all text, service lists, contacts and client references. Edit here, no HTML needed.
- `views/layout.ejs`: shared page shell. `views/partials/`: header and footer.
- `views/pages/`: `home`, `division` (one template used by Security, Cleaning and Supplies), `contact`, `404`.
- `public/css/spark.css`: Spark brand tokens and components. `public/css/main.css` is the original Scout stylesheet.
- `public/img/`: photos and logos. Cleaning and supplies photos were cropped from the PDF profiles, so replace them with originals when you have them.
- `server.js`: routes, contact form validation, rate limit (5 per 15 minutes), honeypot, Nodemailer.

## Contact form

Enquiries go to `MAIL_TO`. Set `MAIL_TO_SECURITY`, `MAIL_TO_CLEANING` or `MAIL_TO_SUPPLIES` to send a division's enquiries elsewhere.
If SMTP is not configured, the form shows a message with the phone number and email instead of failing silently.

## Deploying

Needs Node 18 or newer. Run behind a process manager (pm2 or systemd) and a reverse proxy such as nginx for HTTPS.
If the proxy sits in front of Node, add `app.set('trust proxy', 1)` in `server.js` so the rate limit sees real visitor addresses.

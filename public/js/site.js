(function () {
  'use strict';

  // Mobile navigation
  var toggle = document.querySelector('.mobile-nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('mobile-nav-active');
      toggle.classList.toggle('bi-list', !open);
      toggle.classList.toggle('bi-x', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.querySelectorAll('#navmenu a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (document.body.classList.contains('mobile-nav-active')) toggle.click();
      });
    });
  }

  // Back to top + sticky header state
  var top = document.getElementById('scroll-top');
  function onScroll() {
    var scrolled = window.scrollY > 100;
    document.body.classList.toggle('scrolled', scrolled);
    if (top) top.classList.toggle('active', scrolled);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);
  if (top) top.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // Contact form: send with fetch, fall back to a normal post if JavaScript is off
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');

  function show(ok, message) {
    status.innerHTML = '';
    var box = document.createElement('div');
    box.className = 'alert ' + (ok ? 'alert-success' : 'alert-danger');
    box.textContent = message;
    status.appendChild(box);
    status.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function setError(field, message) {
    var input = form.elements[field];
    var msg = document.getElementById(field + '-error');
    if (!input || !msg) return;
    input.classList.toggle('is-invalid', !!message);
    msg.textContent = message || '';
    if (message) input.setAttribute('aria-describedby', field + '-error'); else input.removeAttribute('aria-describedby');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    ['name', 'email', 'message'].forEach(function (f) { setError(f, ''); });
    var button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    var original = button.textContent;
    button.textContent = 'Sending...';

    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
    })
      .then(function (r) { return r.json().then(function (data) { return { ok: r.ok, data: data }; }); })
      .then(function (res) {
        if (res.data.errors) {
          Object.keys(res.data.errors).forEach(function (f) { setError(f, res.data.errors[f]); });
          var first = form.querySelector('.is-invalid');
          if (first) first.focus();
        }
        show(res.ok && res.data.ok, res.data.message || 'Something went wrong. Please try again.');
        if (res.ok && res.data.ok) form.reset();
      })
      .catch(function () { show(false, 'We could not reach the server. Check your connection and try again.'); })
      .then(function () { button.disabled = false; button.textContent = original; });
  });
})();

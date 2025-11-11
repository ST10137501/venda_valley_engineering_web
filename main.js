/* main.js - Interactivity for Venda Valley Engineering site */

/* --- Utility / DOM helpers --- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* --- Mobile menu toggle --- */
function toggleMenu() {
  const nav = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  nav.classList.toggle('hidden');
  btn.classList.toggle('open');
}

/* Attach to window for inline onclick in HTML */
window.toggleMenu = toggleMenu;

/* --- Redirect flows --- */
function handleSignupRedirect(ev) {
  ev?.preventDefault();
  // simulate signup steps, then go to login
  window.location.href = 'login.html';
}
function handleLoginRedirect(ev) {
  ev?.preventDefault();
  // simulate auth, then go to home
  window.location.href = 'index.html';
}
window.handleSignupRedirect = handleSignupRedirect;
window.handleLoginRedirect = handleLoginRedirect;

/* --- Booking form submission --- */
function handleBookingSubmit(ev) {
  ev.preventDefault();
  const form = ev.target;
  const name = form.querySelector('[name="name"]').value || 'Customer';
  const messageWrap = document.getElementById('bookingMessage');
  messageWrap.innerHTML = `
    <div class="p-4 rounded-md bg-green-900/50 border border-green-700">
      <strong class="text-green-300">Booking confirmed</strong>
      <div class="text-sm mt-1">Thanks, ${escapeHtml(name)} — we received your booking request. We will contact you to confirm details.</div>
    </div>`;
  form.reset();
  // optionally scroll to message
  messageWrap.scrollIntoView({behavior:'smooth'});
}
window.handleBookingSubmit = handleBookingSubmit;

/* --- Contact quick form --- */
function handleContactSubmit(ev) {
  ev.preventDefault();
  const wrap = document.getElementById('contactMessage');
  wrap.innerHTML = `<div class="p-4 rounded-md bg-blue-900/50 border border-blue-700">
    <strong class="text-blue-300">Message sent</strong>
    <div class="text-sm mt-1">Thanks — we'll get back to you at the email provided.</div>
  </div>`;
  ev.target.reset();
}
window.handleContactSubmit = handleContactSubmit;

/* --- Profile image preview & save simulation --- */
function handleProfilePicPreview(input) {
  const preview = document.getElementById('profilePicPreview');
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => preview.src = e.target.result;
    reader.readAsDataURL(input.files[0]);
  }
}
window.handleProfilePicPreview = handleProfilePicPreview;

function handleProfileSave(ev) {
  ev.preventDefault();
  const wrap = document.getElementById('profileMessage');
  wrap.innerHTML = `<div class="p-3 rounded-md bg-yellow-900/30 border border-yellow-700 text-yellow-200">
      Profile updated successfully.
    </div>`;
  wrap.scrollIntoView({behavior:'smooth'});
}
window.handleProfileSave = handleProfileSave;

/* --- small helper to escape HTML --- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const link = document.createElement("a");
link.href = apkUrl;
link.download = "VendaValleyApp.apk";
link.click();


/* --- Attach listeners for forms present on the page --- */
document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) bookingForm.addEventListener('submit', handleBookingSubmit);

  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

  const profileForm = document.getElementById('profileForm');
  if (profileForm) profileForm.addEventListener('submit', handleProfileSave);
});

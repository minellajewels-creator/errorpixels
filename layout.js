// Shared layout components

const PHONE = '7010768895';
const WHATSAPP_MSG = encodeURIComponent("Hi Error Pixels! I'd like to enquire about your photography/videography services.");

function getNavHTML(activePage) {
  return `
  <nav class="navbar">
    <a href="../index.html" class="nav-logo">
      <img src="../assets/logo.png" alt="Error Pixels Logo">
      <span class="nav-logo-text">ERROR PIXELS<span class="nav-logo-sub">Where Imperfection Becomes Art</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="../index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="../pages/about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
      <li><a href="../pages/services.html" ${activePage==='services'?'class="active"':''}>Services</a></li>
      <li class="nav-item">
        <a href="../pages/portfolio.html" ${activePage==='portfolio'?'class="active"':''}>Portfolio ▾</a>
        <div class="dropdown" id="portfolio-dropdown">
          <span style="display:block;padding:8px 20px;font-size:0.65rem;letter-spacing:0.15em;color:var(--gold);text-transform:uppercase;">Loading...</span>
        </div>
      </li>
      <li><a href="../pages/reels.html" ${activePage==='reels'?'class="active"':''}>Reels</a></li>
      <li><a href="../pages/contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
    </ul>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu">
    <a href="../index.html">Home</a>
    <a href="../pages/about.html">About</a>
    <a href="../pages/services.html">Services</a>
    <a href="../pages/portfolio.html">Portfolio</a>
    <a href="../pages/reels.html">Reels</a>
    <a href="../pages/contact.html">Contact</a>
  </div>`;
}

function getRootNavHTML(activePage) {
  return `
  <nav class="navbar">
    <a href="index.html" class="nav-logo">
      <img src="assets/logo.png" alt="Error Pixels Logo">
      <span class="nav-logo-text">ERROR PIXELS<span class="nav-logo-sub">Where Imperfection Becomes Art</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="pages/about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
      <li><a href="pages/services.html" ${activePage==='services'?'class="active"':''}>Services</a></li>
      <li class="nav-item">
        <a href="pages/portfolio.html" ${activePage==='portfolio'?'class="active"':''}>Portfolio ▾</a>
        <div class="dropdown" id="portfolio-dropdown">
          <span style="display:block;padding:8px 20px;font-size:0.65rem;letter-spacing:0.15em;color:var(--gold);text-transform:uppercase;">Loading...</span>
        </div>
      </li>
      <li><a href="pages/reels.html" ${activePage==='reels'?'class="active"':''}>Reels</a></li>
      <li><a href="pages/contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
    </ul>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu">
    <a href="index.html">Home</a>
    <a href="pages/about.html">About</a>
    <a href="pages/services.html">Services</a>
    <a href="pages/portfolio.html">Portfolio</a>
    <a href="pages/reels.html">Reels</a>
    <a href="pages/contact.html">Contact</a>
  </div>`;
}

function getFooterHTML(isRoot) {
  const base = isRoot ? '' : '../';
  return `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${base}assets/logo.png" alt="Error Pixels">
        <p>"Where imperfection becomes art — every frame tells a story worth telling."</p>
        <div class="gold-divider" style="margin-top:20px;"></div>
        <div class="social-links" style="margin-top:16px;">
          <a href="https://www.instagram.com/error_pixels" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="${base}index.html">Home</a></li>
          <li><a href="${base}pages/about.html">About Us</a></li>
          <li><a href="${base}pages/services.html">Services</a></li>
          <li><a href="${base}pages/portfolio.html">Portfolio</a></li>
          <li><a href="${base}pages/reels.html">Reels</a></li>
          <li><a href="${base}pages/contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="${base}pages/services.html">Wedding Photography</a></li>
          <li><a href="${base}pages/services.html">Pre-Wedding Shoots</a></li>
          <li><a href="${base}pages/services.html">Arangetram</a></li>
          <li><a href="${base}pages/services.html">Modelling Shoot</a></li>
          <li><a href="${base}pages/services.html">Branding Videos</a></li>
          <li><a href="${base}pages/services.html">Reels & Editing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a class="footer-contact-item" href="tel:+91${PHONE}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          +91 ${PHONE}
        </a>
        <a class="footer-contact-item" href="https://wa.me/91${PHONE}?text=${WHATSAPP_MSG}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp Us
        </a>
        <div class="footer-contact-item" style="cursor:default;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          Vinayagar Kovil Street,<br>Velandipalayam,<br>Coimbatore – 641025
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Error Pixels. All rights reserved.</p>
      <div class="social-links">
        <a href="https://www.instagram.com/error_pixels" target="_blank" rel="noopener" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
      </div>
    </div>
  </footer>`;
}

function getFloatingCTA() {
  return `
  <div class="floating-cta">
    <a href="https://wa.me/91${PHONE}?text=${WHATSAPP_MSG}" class="cta-btn whatsapp" target="_blank" rel="noopener">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp
    </a>
    <a href="tel:+91${PHONE}" class="cta-btn call">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      Call Now
    </a>
  </div>`;
}

// Inject layout
document.addEventListener('DOMContentLoaded', () => {
  // Floating CTA
  document.body.insertAdjacentHTML('beforeend', getFloatingCTA());
});

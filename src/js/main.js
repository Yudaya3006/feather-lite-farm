/**
 * Feather Lite Farm - Main JavaScript Module
 * Universal Navigation, Mobile Drawer, Scroll Reveal, Header/Footer Hydration
 */

import { farmConfig } from '../data/farmConfig.js';

export function runInit() {
  try {
    initHeaderAndNav();
    initFooter();
    initMobileBottomBar();
    initScrollReveal();
  } catch (err) {
    console.error('Error during Feather Lite Farm UI initialization:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runInit);
} else {
  runInit();
}

function getNormalizedCurrentPage() {
  let path = window.location.pathname.toLowerCase();
  if (path === '' || path === '/' || path.endsWith('/')) {
    return 'index.html';
  }
  let file = path.split('/').pop();
  if (!file || file === '') return 'index.html';
  if (!file.includes('.')) file += '.html';
  return file;
}

/**
 * Hydrates Header & Navigation Links with Active Page Highlighting
 */
function initHeaderAndNav() {
  const currentPage = getNormalizedCurrentPage();

  const headerContainer = document.getElementById('site-header-container');
  if (!headerContainer) return;

  const activeClass = (path) => (currentPage === path ? 'active' : '');
  const ariaAttr = (path) => (currentPage === path ? 'aria-current="page"' : '');

  const whatsappUrl = farmConfig.getWhatsAppUrl();

  headerContainer.innerHTML = `
    <header class="site-header">
      <div class="container">
        <nav class="header-island" aria-label="Main Navigation">
          <a href="index.html" class="brand-logo" title="${farmConfig.brand.name} Home">
            <div class="brand-logo-icon">🪶</div>
            <span class="brand-logo-text">${farmConfig.brand.name}</span>
          </a>

          <ul class="nav-links">
            <li><a href="index.html" class="nav-link ${activeClass('index.html')}" ${ariaAttr('index.html')}>Home</a></li>
            <li><a href="products.html" class="nav-link ${activeClass('products.html')}" ${ariaAttr('products.html')}>Our Quail Eggs</a></li>
            <li><a href="about.html" class="nav-link ${activeClass('about.html')}" ${ariaAttr('about.html')}>Our Farm</a></li>
            <li><a href="gallery.html" class="nav-link ${activeClass('gallery.html')}" ${ariaAttr('gallery.html')}>Gallery</a></li>
            <li><a href="faq.html" class="nav-link ${activeClass('faq.html')}" ${ariaAttr('faq.html')}>FAQ</a></li>
            <li><a href="contact.html" class="nav-link ${activeClass('contact.html')}" ${ariaAttr('contact.html')}>Contact & Order</a></li>
          </ul>

          <div class="header-cta">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              Order on WhatsApp
              <span class="btn-icon-wrapper">💬</span>
            </a>
          </div>

          <button class="mobile-menu-btn" id="mobile-menu-open-btn" aria-label="Open Mobile Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="7" x2="21" y2="7"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="17" x2="21" y2="17"></line>
            </svg>
          </button>
        </nav>
      </div>
    </header>

    <!-- Mobile Drawer Overlay -->
    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="mobile-drawer-header">
        <a href="index.html" class="brand-logo">
          <div class="brand-logo-icon">🪶</div>
          <span class="brand-logo-text">${farmConfig.brand.name}</span>
        </a>
        <button class="mobile-drawer-close" id="mobile-drawer-close-btn" aria-label="Close Mobile Menu">✕</button>
      </div>

      <ul class="mobile-nav-list">
        <li><a href="index.html" class="mobile-nav-link ${activeClass('index.html')}" ${ariaAttr('index.html')}>Home <span>${currentPage === 'index.html' ? '✓' : ''}</span></a></li>
        <li><a href="products.html" class="mobile-nav-link ${activeClass('products.html')}" ${ariaAttr('products.html')}>Our Quail Eggs <span>${currentPage === 'products.html' ? '✓' : ''}</span></a></li>
        <li><a href="about.html" class="mobile-nav-link ${activeClass('about.html')}" ${ariaAttr('about.html')}>Our Farm <span>${currentPage === 'about.html' ? '✓' : ''}</span></a></li>
        <li><a href="gallery.html" class="mobile-nav-link ${activeClass('gallery.html')}" ${ariaAttr('gallery.html')}>Gallery <span>${currentPage === 'gallery.html' ? '✓' : ''}</span></a></li>
        <li><a href="faq.html" class="mobile-nav-link ${activeClass('faq.html')}" ${ariaAttr('faq.html')}>FAQ <span>${currentPage === 'faq.html' ? '✓' : ''}</span></a></li>
        <li><a href="contact.html" class="mobile-nav-link ${activeClass('contact.html')}" ${ariaAttr('contact.html')}>Contact & Order <span>${currentPage === 'contact.html' ? '✓' : ''}</span></a></li>
      </ul>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
          Order on WhatsApp
          <span class="btn-icon-wrapper">💬</span>
        </a>
        <a href="contact.html" class="btn btn-secondary" style="width: 100%;">
          Contact Farm
        </a>
      </div>
    </div>
  `;

  // Drawer Toggle Events
  const openBtn = document.getElementById('mobile-menu-open-btn');
  const closeBtn = document.getElementById('mobile-drawer-close-btn');
  const drawer = document.getElementById('mobile-drawer');

  if (openBtn && closeBtn && drawer) {
    const closeDrawer = () => {
      drawer.classList.remove('is-active');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    openBtn.addEventListener('click', () => {
      drawer.classList.add('is-active');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', closeDrawer);

    // Auto-close mobile menu when tapping links
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }
}

/**
 * Hydrates Site Footer Dynamically
 */
function initFooter() {
  const footerContainer = document.getElementById('site-footer-container');
  if (!footerContainer) return;

  const currentYear = new Date().getFullYear();
  const whatsappUrl = farmConfig.getWhatsAppUrl();
  const phoneUrl = farmConfig.getPhoneUrl();

  footerContainer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>${farmConfig.brand.name}</h3>
            <p>${farmConfig.brand.tagline}</p>
            <p style="margin-top: 1rem; font-size: 0.88rem; color: #8C7F70;">
              Serving fresh quail eggs direct to families, local restaurants, and retail partners across ${farmConfig.location.serviceArea}.
            </p>
          </div>

          <div>
            <h4 class="footer-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html" class="footer-link">Home</a></li>
              <li><a href="products.html" class="footer-link">Our Quail Eggs</a></li>
              <li><a href="about.html" class="footer-link">Our Farm</a></li>
              <li><a href="gallery.html" class="footer-link">Gallery</a></li>
              <li><a href="faq.html" class="footer-link">FAQ</a></li>
              <li><a href="contact.html" class="footer-link">Contact & Order</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Contact Farm</h4>
            <ul class="footer-links">
              <li><a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="footer-link">WhatsApp: ${farmConfig.contact.whatsappDisplay || farmConfig.contact.phone}</a></li>
              <li><a href="${phoneUrl}" class="footer-link">Phone: ${farmConfig.contact.phone}</a></li>
              <li><a href="mailto:${farmConfig.contact.email}" class="footer-link">Email: ${farmConfig.contact.email}</a></li>
              <li><span class="footer-link" style="opacity: 0.8;">Location: ${farmConfig.location.fullLocation}</span></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Social & Hours</h4>
            <ul class="footer-links">
              <li><a href="${farmConfig.contact.instagramUrl}" target="_blank" rel="noopener noreferrer" class="footer-link">Instagram: ${farmConfig.contact.instagramHandle}</a></li>
              <li><span class="footer-link" style="opacity: 0.8;">Hours: ${farmConfig.location.openingHours}</span></li>
              <li><span class="footer-link" style="opacity: 0.8;">Region: ${farmConfig.location.fullLocation}</span></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© ${currentYear} ${farmConfig.brand.name}. All rights reserved.</p>
          <p style="font-size: 0.8rem;">Quail Egg Farm | ${farmConfig.location.fullLocation}</p>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Sticky Mobile Bottom Action Bar (Call / WhatsApp / Order Request)
 */
function initMobileBottomBar() {
  const barContainer = document.getElementById('mobile-bottom-bar-container');
  if (!barContainer) return;

  const whatsappUrl = farmConfig.getWhatsAppUrl();
  const phoneUrl = farmConfig.getPhoneUrl();

  barContainer.innerHTML = `
    <div class="mobile-bottom-bar" aria-label="Mobile Quick Contact Bar">
      <div class="mobile-bottom-bar-grid">
        <a href="${phoneUrl}" class="mobile-bar-btn" title="Call Farm">
          <span>📞</span> Call Farm
        </a>
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="mobile-bar-btn btn-action-whatsapp" title="WhatsApp Order">
          <span>💬</span> WhatsApp
        </a>
        <a href="contact.html" class="mobile-bar-btn" title="Order Request Form">
          <span>📝</span> Order Form
        </a>
      </div>
    </div>
  `;
}

/**
 * IntersectionObserver Scroll Entry Animations (GPU Safe)
 */
export function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  document.documentElement.classList.add('js-reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

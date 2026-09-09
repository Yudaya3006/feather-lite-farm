/**
 * Contact & Order Module - Feather Lite Farm
 * Intercepts form submission and compiles input into a WhatsApp message request
 */

import { farmConfig } from '../data/farmConfig.js';

document.addEventListener('DOMContentLoaded', () => {
  initContactPageInfo();
  initOrderForm();
});

function initContactPageInfo() {
  const whatsappEl = document.getElementById('contact-whatsapp-val');
  const phoneEl = document.getElementById('contact-phone-val');
  const emailEl = document.getElementById('contact-email-val');
  const addressEl = document.getElementById('contact-address-val');
  const hoursEl = document.getElementById('contact-hours-val');
  const mapsLink = document.getElementById('contact-maps-link');

  const whatsappUrl = farmConfig.getWhatsAppUrl();
  const phoneUrl = farmConfig.getPhoneUrl();

  if (whatsappEl) {
    whatsappEl.innerHTML = `<a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="contact-link">${farmConfig.contact.whatsappDisplay || farmConfig.contact.phone}</a>`;
  }
  if (phoneEl) {
    phoneEl.innerHTML = `<a href="${phoneUrl}" class="contact-link">${farmConfig.contact.phone}</a>`;
  }
  if (emailEl) {
    emailEl.innerHTML = `<a href="mailto:${farmConfig.contact.email}" class="contact-link">${farmConfig.contact.email}</a>`;
  }
  if (addressEl) {
    addressEl.textContent = farmConfig.location.fullLocation;
  }
  if (hoursEl) {
    hoursEl.textContent = farmConfig.location.openingHours;
  }

  if (mapsLink) {
    mapsLink.href = farmConfig.location.googleMapsUrl;
    mapsLink.textContent = `Open Map Location (${farmConfig.location.fullLocation})`;
  }
}

function initOrderForm() {
  const form = document.getElementById('order-request-form');
  const packSelect = document.getElementById('form-pack-select');
  const statusNotice = document.getElementById('form-status-notice');

  if (!form) return;

  // Populate dynamic pack sizes in select dropdown
  if (packSelect && farmConfig.products.length > 0) {
    packSelect.innerHTML = farmConfig.products.map(p => 
      `<option value="${p.name} (${p.packSize})">${p.name} — ${p.packSize}</option>`
    ).join('') + `<option value="Custom Quantity Inquiry">Custom Quantity / Bulk Inquiry</option>`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name-input')?.value.trim() || 'Customer';
    const phone = document.getElementById('form-phone-input')?.value.trim() || farmConfig.contact.phone;
    const pack = packSelect?.value || 'Fresh Quail Eggs';
    const quantity = document.getElementById('form-qty-input')?.value.trim() || '1';
    const location = document.getElementById('form-location-input')?.value.trim() || farmConfig.location.fullLocation;
    const message = document.getElementById('form-msg-input')?.value.trim() || '';

    // Construct formatted WhatsApp message
    let compiledMessage = `Hello Feather Lite Farm,\n\nI would like to submit an order request:\n`;
    compiledMessage += `• Name: ${name}\n`;
    compiledMessage += `• Contact Phone: ${phone}\n`;
    compiledMessage += `• Pack Selection: ${pack}\n`;
    compiledMessage += `• Quantity: ${quantity}\n`;
    compiledMessage += `• Delivery/Pickup Area: ${location}\n`;

    if (message) {
      compiledMessage += `• Note/Message: ${message}\n`;
    }

    const whatsappUrl = farmConfig.getWhatsAppUrl(compiledMessage);

    if (statusNotice) {
      statusNotice.style.display = 'block';
      statusNotice.innerHTML = `
        <div class="bezel-card-sm" style="background-color: var(--color-accent-sage-tint); border-color: rgba(78, 101, 72, 0.2);">
          <div class="bezel-card-sm-inner" style="padding: 1rem; color: var(--color-accent-sage-dark);">
            <strong>✅ Request Compiled!</strong><br>
            Opening WhatsApp to send your request directly to Feather Lite Farm. 
            If WhatsApp does not open automatically, <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="contact-link" style="font-weight: 700;">click here to launch WhatsApp</a>.
          </div>
        </div>
      `;
    }

    // Open WhatsApp URL
    window.open(whatsappUrl, '_blank');
  });
}

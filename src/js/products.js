/**
 * Products Module - Feather Lite Farm
 * Renders product cards from farmConfig.js & provides dynamic WhatsApp order links
 */

import { farmConfig } from '../data/farmConfig.js';

export function renderProductCards(targetContainerId, isFeaturedOnly = false) {
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  const productsToRender = isFeaturedOnly
    ? farmConfig.products.filter(p => p.featured)
    : farmConfig.products;

  if (!productsToRender || productsToRender.length === 0) {
    container.innerHTML = `<p class="lead-text">No product packages currently listed.</p>`;
    return;
  }

  container.innerHTML = productsToRender.map(product => {
    const customMessage = `Hello Feather Lite Farm, I would like to order: ${product.name} (${product.packSize}).`;
    const whatsappUrl = farmConfig.getWhatsAppUrl(customMessage);

    return `
      <div class="bezel-card reveal-on-scroll">
        <div class="bezel-card-inner">
          ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
          <h3 class="product-card-title">${product.name}</h3>
          
          <div class="product-card-pack">
            <span>📦 Pack Size:</span>
            <span class="placeholder-tag">${product.packSize}</span>
          </div>

          <p class="product-card-desc">${product.description}</p>

          <div class="product-card-footer">
            <div>
              <span class="product-price-label">Price</span>
              <div class="product-price-val">${product.price}</div>
            </div>

            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 0.6rem 1.1rem; font-size: 0.88rem;">
              Order on WhatsApp
              <span class="btn-icon-wrapper">💬</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Initializes Interactive Quick Order Helper Widget on products.html
 */
export function initOrderCalculator() {
  const selectPack = document.getElementById('calc-pack-select');
  const inputQty = document.getElementById('calc-qty-input');
  const btnAction = document.getElementById('calc-order-btn');
  const previewText = document.getElementById('calc-preview-msg');

  if (!selectPack || !btnAction) return;

  // Populate options
  selectPack.innerHTML = farmConfig.products.map(p => 
    `<option value="${p.name} (${p.packSize})">${p.name} — ${p.packSize}</option>`
  ).join('');

  function updateLink() {
    const packVal = selectPack.value || 'Fresh Quail Eggs';
    const qtyVal = inputQty ? (inputQty.value || 1) : 1;
    const msg = `Hello Feather Lite Farm, I would like to request an order for ${qtyVal} x ${packVal}.`;

    btnAction.href = farmConfig.getWhatsAppUrl(msg);
    if (previewText) {
      previewText.textContent = `"${msg}"`;
    }
  }

  selectPack.addEventListener('change', updateLink);
  if (inputQty) inputQty.addEventListener('input', updateLink);

  updateLink();
}

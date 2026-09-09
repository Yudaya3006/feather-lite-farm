/**
 * Gallery Module - Feather Lite Farm
 * Category Filtering and Lightbox Modal
 */

import { farmConfig } from '../data/farmConfig.js';

export function renderGalleryGrid(targetContainerId, isPreviewOnly = false) {
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  const items = isPreviewOnly ? farmConfig.gallery.slice(0, 4) : farmConfig.gallery;

  container.innerHTML = items.map(item => `
    <div class="bezel-card gallery-item-bezel reveal-on-scroll" data-category="${item.category}" data-id="${item.id}">
      <div class="gallery-item-core">
        <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">
          ${getCategoryIcon(item.category)}
        </div>
        <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">${item.title}</h4>
        <span class="placeholder-tag" style="font-size: 0.75rem;">[PHOTO PLACEHOLDER]</span>
        <div class="gallery-item-overlay">
          <h4 style="color: white; font-size: 1.1rem; margin-bottom: 0.25rem;">${item.title}</h4>
          <p style="color: #E2D7C8; font-size: 0.85rem;">${item.description}</p>
        </div>
      </div>
    </div>
  `).join('');

  initLightboxEvents(container);
}

function getCategoryIcon(cat) {
  switch (cat) {
    case 'birds': return '🪶';
    case 'eggs': return '🥚';
    case 'packaging': return '📦';
    case 'collection': return '🤲';
    case 'culinary': return '🍳';
    default: return '🏡';
  }
}

export function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item-bezel');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCat = btn.dataset.filter;

      items.forEach(item => {
        if (filterCat === 'all' || item.dataset.category === filterCat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initLightboxEvents(container) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('lightbox-close');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const iconEl = document.getElementById('lightbox-icon');

  container.querySelectorAll('.gallery-item-bezel').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const data = farmConfig.gallery.find(g => g.id === id);
      if (!data) return;

      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.description;
      if (iconEl) iconEl.textContent = getCategoryIcon(data.category);

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

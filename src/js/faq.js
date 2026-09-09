/**
 * FAQ Module - Feather Lite Farm
 * Accessible Accordion Logic & Dynamic Rendering from farmConfig.js
 */

import { farmConfig } from '../data/farmConfig.js';

export function renderFAQList(targetContainerId, limit = null) {
  try {
    const container = document.getElementById(targetContainerId);
    if (!container) return;

    const faqs = (farmConfig && Array.isArray(farmConfig.faqs)) ? farmConfig.faqs : [];
    const faqsToRender = limit ? faqs.slice(0, limit) : faqs;

    if (faqsToRender.length === 0) {
      container.innerHTML = `
        <div class="bezel-card" style="text-align: center; padding: 2rem;">
          <div class="bezel-card-inner">
            <p>Frequently asked questions will appear here.</p>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="faq-list">
        ${faqsToRender.map((item, index) => `
          <div class="faq-item-bezel reveal-on-scroll is-revealed">
            <div class="faq-item-core" id="faq-item-${index}">
              <button class="faq-question-btn" aria-expanded="false" aria-controls="faq-ans-${index}" id="faq-btn-${index}">
                <span>${item.question || 'Question'}</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-answer-panel" id="faq-ans-${index}" role="region" aria-labelledby="faq-btn-${index}">
                <p>${item.answer || 'Answer information will be provided here.'}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    initAccordionEvents(container);
  } catch (err) {
    console.error('Error rendering FAQ list:', err);
  }
}

function initAccordionEvents(container) {
  const buttons = container.querySelectorAll('.faq-question-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => toggleAccordion(btn, container));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion(btn, container);
      }
    });
  });
}

function toggleAccordion(btn, container) {
  const core = btn.closest('.faq-item-core');
  if (!core) return;
  const panel = core.querySelector('.faq-answer-panel');
  const isOpen = core.classList.contains('is-open');

  // Close all open items in this container
  container.querySelectorAll('.faq-item-core').forEach(item => {
    item.classList.remove('is-open');
    const b = item.querySelector('.faq-question-btn');
    if (b) b.setAttribute('aria-expanded', 'false');
    const p = item.querySelector('.faq-answer-panel');
    if (p) p.style.maxHeight = null;
  });

  // Toggle clicked item
  if (!isOpen && panel) {
    core.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    panel.style.maxHeight = panel.scrollHeight + 30 + 'px';
  }
}

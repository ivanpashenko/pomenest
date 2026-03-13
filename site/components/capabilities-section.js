class CapabilitiesSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const sectionId = this.getAttribute('section-id') || 'services';
    const eyebrow = this.getAttribute('eyebrow') || 'Capabilities';
    const title = this.getAttribute('title') || '';
    const items = JSON.parse(this.getAttribute('items') || '[]');
    const variant = this.getAttribute('variant') || 'default';
    const isAudience = variant === 'audience';
    const sectionClass = 'bg-brand-canvas py-16 md:py-24 border-b border-brand-line';
    const eyebrowClass = 'text-xs font-semibold uppercase tracking-widest text-brand-muted';
    const titleClass = 'mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl max-w-2xl';
    
    let gridHtml = '';
    
    if (isAudience) {
      // FOR WHOM layout
      gridHtml = `
        <div class="mt-12 flex flex-col gap-6">
          ${items.map((item, index) => {
            const isEven = index % 2 !== 0;
            return `
            <article class="flex flex-col md:flex-row items-stretch rounded-[32px] bg-white overflow-hidden min-h-[400px]">
              ${isEven ? `
                <div class="w-full md:w-1/2 overflow-hidden">
                  <img src="${item.image || ''}" class="w-full h-full object-cover" alt="" />
                </div>
              ` : ''}
              <div class="flex w-full md:w-1/2 flex-col justify-center px-10 py-16 text-center">
                <div class="text-[10px] font-semibold uppercase tracking-widest text-brand-muted">${item.name}</div>
                <h3 class="mx-auto mt-6 max-w-md text-3xl font-bold leading-tight text-brand-ink">${item.title}</h3>
                <p class="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-muted">${item.body}</p>
              </div>
              ${!isEven ? `
                <div class="w-full md:w-1/2 overflow-hidden">
                  <img src="${item.image || ''}" class="w-full h-full object-cover" alt="" />
                </div>
              ` : ''}
            </article>
          `}).join('')}
        </div>
      `;
    } else {
      // SERVICES layout
      gridHtml = `
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          ${items.map((item, itemIndex) => `
            <article class="flex flex-col rounded-[24px] bg-white p-8 md:p-10 shadow-sm">
              <h3 class="text-3xl font-bold leading-tight text-brand-ink">${item.name}</h3>
              <p class="mt-5 text-sm leading-relaxed text-brand-muted">${item.body}</p>
              
              ${item.buttons?.length ? `
                <div class="mt-auto pt-8 flex flex-col gap-3">
                  ${item.buttons.map((button, buttonIndex) => `
                    <button class="service-open text-left font-semibold text-brand-primary text-sm flex items-center gap-1 hover:opacity-80 transition" type="button" data-item-index="${itemIndex}" data-button-index="${buttonIndex}">
                      ${button.label || button} &rarr;
                    </button>
                  `).join('')}
                </div>
              ` : ''}
            </article>
          `).join('')}
        </div>
      `;
    }

    this.innerHTML = `
      <section id="${sectionId}" class="${sectionClass}">
        <div class="mx-auto max-w-content px-6 md:px-10">
          <div class="max-w-3xl">
            <div class="${eyebrowClass}">${eyebrow}</div>
            <h2 class="${titleClass}">${title}</h2>
          </div>
          ${gridHtml}
        </div>

        <div class="service-modal fixed inset-0 z-50 hidden overflow-y-auto">
          <div class="service-backdrop fixed inset-0 bg-brand-ink/40 backdrop-blur-sm"></div>
          <div class="relative flex min-h-screen items-start justify-center p-4 md:p-8">
            <div class="relative my-8 w-full max-w-3xl overflow-hidden rounded-[30px] bg-white shadow-2xl">
              <button class="service-close absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-canvas/50 text-xl text-brand-ink transition hover:bg-brand-canvas" type="button" aria-label="Close service">×</button>
              <div class="service-modal-content"></div>
            </div>
          </div>
        </div>
      </section>
    `;

    const modal = this.querySelector('.service-modal');
    const modalContent = this.querySelector('.service-modal-content');
    const closeButton = this.querySelector('.service-close');
    const backdrop = this.querySelector('.service-backdrop');

    const openModal = (item, button) => {
      const buttonData = typeof button === 'string' ? { label: button } : button;
      modalContent.innerHTML = `
        <div class="p-8 md:p-10 lg:p-12 text-brand-ink bg-white">
          <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${item.name}</div>
          <h3 class="mt-4 max-w-2xl text-3xl font-bold md:text-4xl">${buttonData.label || ''}</h3>
          ${buttonData.subtitle ? `<p class="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">${buttonData.subtitle}</p>` : ''}

          ${buttonData.description ? `
            <div class="mt-8 border-t border-brand-line pt-8">
              <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">What it is</div>
              <p class="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted">${buttonData.description}</p>
            </div>
          ` : ''}

          ${buttonData.steps?.length ? `
            <div class="mt-8 border-t border-brand-line pt-8">
              <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">How it works</div>
              <div class="mt-5 space-y-4">
                ${buttonData.steps.map((step, index) => `
                  <div class="rounded-2xl bg-brand-canvas/30 p-5">
                    <div class="text-sm font-bold text-brand-ink">Step ${index + 1}</div>
                    <p class="mt-2 text-sm leading-relaxed text-brand-muted">${step}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${(buttonData.outputs?.length || buttonData.idealFor?.length) ? `
            <div class="mt-8 grid gap-4 border-t border-brand-line pt-8 md:grid-cols-2">
              ${buttonData.outputs?.length ? `
                <div class="rounded-2xl bg-brand-canvas/30 p-6">
                  <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">What you get</div>
                  <ul class="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted">
                    ${buttonData.outputs.map(output => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${output}</span></li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${buttonData.idealFor?.length ? `
                <div class="rounded-2xl bg-brand-canvas/30 p-6">
                  <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Ideal for</div>
                  <ul class="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted">
                    ${buttonData.idealFor.map(target => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${target}</span></li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          ` : ''}

          ${(buttonData.ctaLabel && buttonData.ctaHref) ? `
            <div class="mt-8 border-t border-brand-line pt-8">
              <a href="${buttonData.ctaHref}" class="inline-flex rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-primary/90">${buttonData.ctaLabel}</a>
            </div>
          ` : ''}
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
      modal.classList.add('hidden');
      modalContent.innerHTML = '';
      document.body.classList.remove('overflow-hidden');
    };

    this.querySelectorAll('.service-open').forEach((buttonEl) => {
      buttonEl.addEventListener('click', () => {
        const itemIndex = Number(buttonEl.getAttribute('data-item-index'));
        const buttonIndex = Number(buttonEl.getAttribute('data-button-index'));
        const item = items[itemIndex];
        const button = item.buttons?.[buttonIndex];
        openModal(item, button);
      });
    });

    closeButton?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }
}

customElements.define('capabilities-section', CapabilitiesSection);

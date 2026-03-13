class SplitSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const id = this.getAttribute('section-id') || '';
    const eyebrow = this.getAttribute('eyebrow') || '';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const image = this.getAttribute('image') || '';
    const ctaLabel = this.getAttribute('cta-label') || '';
    const ctaHref = this.getAttribute('cta-href') || '';
    const secondaryCtaLabel = this.getAttribute('secondary-cta-label') || '';
    const secondaryCtaHref = this.getAttribute('secondary-cta-href') || '';
    
    const buttonsAttr = this.getAttribute('buttons');
    let buttons = null;
    if (buttonsAttr) {
      try {
        buttons = JSON.parse(buttonsAttr);
      } catch(e) {}
    }

    const bg = this.getAttribute('bg') === 'white' ? 'bg-white' : 'bg-brand-canvas';

    this.innerHTML = `
      <section ${id ? `id="${id}"` : ''} class="${bg} py-16 md:py-24 border-b border-brand-line">
        <div class="mx-auto max-w-content px-6 md:px-10">
          <div class="grid gap-12 md:grid-cols-2 md:items-start md:gap-16 lg:gap-24">
            
            <div class="order-1 md:order-1 flex flex-col h-full">
              <div class="pt-4 md:pt-0">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${eyebrow}</div>
                <h2 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl lg:text-[54px] lg:leading-[1.1]">${title}</h2>
                <p class="mt-6 text-lg md:text-xl leading-relaxed text-brand-muted">${body}</p>
              </div>
              
              ${buttons && buttons.length > 0 ? `
                <div class="mt-10 md:mt-auto pb-4 md:pb-10 flex flex-col items-start gap-4">
                  ${buttons.map((btn) => `
                    <button onclick="document.getElementById('${btn.targetId}')?.scrollIntoView({behavior:'smooth'})" class="inline-flex items-center rounded-full border border-brand-ink bg-transparent px-7 py-3.5 text-base font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-white">
                      ${btn.label} &darr;
                    </button>
                  `).join('')}
                </div>
              ` : (ctaLabel || secondaryCtaLabel) ? `
                <div class="mt-10 md:mt-auto pb-4 md:pb-10 flex flex-wrap items-center gap-6">
                  ${ctaLabel ? `
                    <a href="${ctaHref}" class="inline-flex items-center rounded-full bg-brand-primary px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary/90 hover:shadow-md hover:-translate-y-0.5">
                      ${ctaLabel}
                    </a>
                  ` : ''}
                  ${secondaryCtaLabel ? `
                    <a href="${secondaryCtaHref}" class="text-base font-semibold text-brand-primary hover:opacity-80 transition flex items-center gap-1">
                      ${secondaryCtaLabel} &rarr;
                    </a>
                  ` : ''}
                </div>
              ` : ''}
            </div>

            <div class="order-2 md:order-2 w-full">
              ${image ? `
                <div class="relative w-full overflow-hidden rounded-[32px] md:rounded-[40px] shadow-sm aspect-square bg-white">
                  <img src="${image}" alt="${title}" class="h-full w-full object-cover object-center" />
                </div>
              ` : ''}
            </div>

          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('split-section', SplitSection);

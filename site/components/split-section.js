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

    this.innerHTML = `
      <section ${id ? `id="${id}"` : ''} class="bg-brand-canvas py-16 md:py-24 border-b border-brand-line">
        <div class="mx-auto max-w-content px-6 md:px-10">
          <div class="grid gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
            
            <div class="order-1 md:order-1 flex flex-col justify-center">
              <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${eyebrow}</div>
              <h2 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl lg:text-[54px] lg:leading-[1.1]">${title}</h2>
              <p class="mt-6 text-lg md:text-xl leading-relaxed text-brand-muted">${body}</p>
              ${ctaLabel ? `
                <div class="mt-10">
                  <a href="${ctaHref}" class="inline-flex items-center rounded-full bg-brand-primary px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary/90 hover:shadow-md hover:-translate-y-0.5">
                    ${ctaLabel}
                  </a>
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

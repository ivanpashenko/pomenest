class HeroSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || '';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const primaryLabel = this.getAttribute('primary-label') || 'Book a strategy call';
    const primaryHref = this.getAttribute('primary-href') || '#contact';
    const secondaryLabel = this.getAttribute('secondary-label') || 'See capabilities';
    const secondaryHref = this.getAttribute('secondary-href') || '#capabilities';
    const energyImage = this.getAttribute('energy-image') || '';
    const logoImage = this.getAttribute('logo-image') || '';

    this.innerHTML = `
      <section id="top" class="border-b border-brand-line bg-brand-panel">
        <div class="mx-auto grid min-h-[88vh] max-w-content gap-14 px-6 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] md:px-10 md:py-24 lg:items-center lg:gap-10">
          <div>
            <div class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-soft">${eyebrow}</div>
            <h1 class="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">${title}</h1>
            <p class="mt-8 max-w-xl text-base leading-8 text-brand-soft md:text-lg">${body}</p>
            <div class="mt-10 flex flex-wrap gap-3">
              <a href="${primaryHref}" class="rounded-full bg-brand-paper px-5 py-3 text-sm font-medium text-brand-panel">${primaryLabel}</a>
              <a href="${secondaryHref}" class="rounded-full border border-white/18 px-5 py-3 text-sm font-medium text-brand-ink">${secondaryLabel}</a>
            </div>
          </div>
          <div class="flex items-center justify-center lg:justify-end">
            ${energyImage ? `
              <div class="relative w-full max-w-[780px]">
                <img src="${energyImage}" alt="Contained energy aperture" class="w-full h-auto object-contain" />
              </div>
            ` : ''}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);

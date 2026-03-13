class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const brand = this.getAttribute('brand') || 'POME Nest';
    const links = JSON.parse(this.getAttribute('links') || '[]');
    const ctaLabel = this.getAttribute('cta-label') || 'Book a strategy call';
    const logoImage = this.getAttribute('logo-image') || '';

    this.innerHTML = `
      <header class="sticky top-0 z-20 bg-brand-canvas/90 backdrop-blur">
        <div class="mx-auto flex max-w-content items-center justify-between px-6 py-6 md:px-10">
          <a href="#top" class="flex items-center gap-3">
            ${logoImage ? `<img src="${logoImage}" alt="${brand}" class="h-8 w-auto" />` : `<span class="text-sm font-semibold tracking-[0.18em] uppercase">${brand}</span>`}
          </a>
          <nav class="hidden items-center gap-6 md:flex">
            ${links.map(link => `<a href="${link.href}" class="text-sm font-medium text-brand-ink/70 transition hover:text-brand-ink">${link.label}</a>`).join('')}
          </nav>
          <a href="#contact" class="rounded-full border border-brand-ink px-5 py-2 text-sm font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-brand-surface">${ctaLabel}</a>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);

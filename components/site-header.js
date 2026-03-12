class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const brand = this.getAttribute('brand') || 'POME Nest';
    const links = JSON.parse(this.getAttribute('links') || '[]');
    const ctaLabel = this.getAttribute('cta-label') || 'Book a strategy call';
    const logoImage = this.getAttribute('logo-image') || '';

    this.innerHTML = `
      <header class="sticky top-0 z-20 border-b border-brand-line bg-brand-panel/90 backdrop-blur">
        <div class="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" class="flex items-center gap-3">
            ${logoImage ? `<img src="${logoImage}" alt="${brand}" class="h-7 w-auto" />` : `<span class="text-sm font-semibold tracking-[0.18em] uppercase">${brand}</span>`}
          </a>
          <nav class="hidden items-center gap-8 md:flex">
            ${links.map(link => `<a href="${link.href}" class="text-sm text-brand-soft transition hover:text-brand-ink">${link.label}</a>`).join('')}
          </nav>
          <a href="#contact" class="rounded-full border border-white/18 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-brand-panel">${ctaLabel}</a>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);

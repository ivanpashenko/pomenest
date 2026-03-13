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
            ${links.map(link => {
              if (link.items) {
                return `
                  <div class="relative group py-2">
                    <button class="flex items-center gap-1 text-sm font-medium text-brand-ink/70 transition hover:text-brand-ink">
                      ${link.label}
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute left-0 top-full mt-0 hidden w-64 flex-col rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5 group-hover:flex">
                      ${link.items.map(subItem => `
                        <a href="${subItem.href}" class="block rounded-lg px-4 py-2 text-sm text-brand-ink/70 hover:bg-brand-canvas hover:text-brand-ink">${subItem.label}</a>
                      `).join('')}
                    </div>
                  </div>
                `;
              }
              return `<a href="${link.href}" class="text-sm font-medium text-brand-ink/70 transition hover:text-brand-ink py-2">${link.label}</a>`;
            }).join('')}
          </nav>
          <a href="#contact" target="_blank" class="rounded-full border border-brand-ink px-5 py-2 text-sm font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-brand-surface">${ctaLabel}</a>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);

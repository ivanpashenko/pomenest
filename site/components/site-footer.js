class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const brand = this.getAttribute('brand') || 'POME Nest';
    const note = this.getAttribute('note') || '';
    const logoImage = this.getAttribute('logo-image') || '';

    this.innerHTML = `
      <footer class="bg-brand-panel">
        <div class="mx-auto flex max-w-content flex-col gap-4 px-6 py-8 text-sm text-brand-soft md:flex-row md:items-center md:justify-between md:px-10">
          <div class="flex items-center gap-3">
            ${logoImage ? `<img src="${logoImage}" alt="${brand}" class="h-7 w-auto" />` : `<div class="font-medium text-brand-ink">${brand}</div>`}
          </div>
          <div>${note}</div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const brand = this.getAttribute('brand') || 'POME Nest';
    const note = this.getAttribute('note') || '';
    const company = this.getAttribute('company') || '';
    const logoImage = this.getAttribute('logo-image') || '';
    const email = this.getAttribute('email') || '';

    this.innerHTML = `
      <footer class="bg-brand-canvas py-12 border-t border-brand-line">
        <div class="mx-auto flex max-w-content flex-col gap-6 px-6 text-sm text-brand-muted md:flex-row md:items-center md:justify-between md:px-10">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              ${logoImage ? `<img src="${logoImage}" alt="${brand}" class="h-6 w-auto opacity-40 grayscale" />` : `<div class="font-bold text-brand-ink uppercase tracking-widest">${brand}</div>`}
            </div>
            ${company ? `<div class="text-xs font-medium">${company}</div>` : ''}
            ${email ? `<div class="text-xs font-medium mt-1"><a href="mailto:${email}" class="hover:text-brand-ink transition">${email}</a></div>` : ''}
          </div>
          <div class="max-w-md md:text-right leading-relaxed">${note}</div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);

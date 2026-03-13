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
      <footer class="bg-brand-canvas py-16 border-t border-brand-line">
        <div class="mx-auto max-w-content px-6 md:px-10 flex flex-col gap-10">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div class="flex flex-col gap-4 min-w-0">
              <div class="flex items-center gap-4 min-w-0">
                <a href="#" class="inline-flex shrink-0 transition-opacity hover:opacity-100">
                  ${logoImage ? `<img src="${logoImage}" alt="${brand}" class="h-5 w-auto mix-blend-multiply opacity-40" />` : `<div class="font-bold text-brand-ink text-xl uppercase tracking-widest opacity-40">${brand}</div>`}
                </a>
                ${note ? `<p class="text-sm text-brand-muted leading-relaxed whitespace-nowrap">${note}</p>` : ''}
              </div>
            </div>

            ${email ? `
            <div class="md:text-right">
              <a href="mailto:${email}" class="text-sm font-medium text-brand-muted hover:text-brand-ink transition-colors">${email}</a>
            </div>
            ` : ''}
          </div>

          ${company ? `
          <div class="text-sm text-brand-muted">
            ${company}
          </div>
          ` : ''}
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);

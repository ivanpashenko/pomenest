class TextSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const id = this.getAttribute('section-id') || '';
    const eyebrow = this.getAttribute('eyebrow') || '';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const dark = this.getAttribute('dark') === 'true';
    const light = this.getAttribute('light') === 'true';

    this.innerHTML = `
      <section ${id ? `id="${id}"` : ''} class="bg-brand-canvas py-16 md:py-24">
        <div class="mx-auto grid max-w-content gap-12 px-6 md:grid-cols-2 md:px-10 items-start">
          <div>
            <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${eyebrow}</div>
            <h2 class="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl">${title}</h2>
          </div>
          <div class="pt-2 md:pt-10">
            <p class="max-w-xl text-lg leading-relaxed text-brand-muted">${body}</p>
            ${this.getAttribute('cta-label') ? `
              <div class="mt-10">
                <a href="${this.getAttribute('cta-href')}" class="inline-flex rounded-full bg-brand-primary px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-primary/90">${this.getAttribute('cta-label')}</a>
              </div>
            ` : ''}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('text-section', TextSection);

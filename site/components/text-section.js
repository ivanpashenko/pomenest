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

    const sectionClass = dark
      ? 'border-b border-brand-line bg-brand-panel text-brand-ink'
      : light
        ? 'border-b border-[#B7B7B4] bg-brand-paper text-[#20242A]'
        : 'border-b border-brand-line bg-brand-panel text-brand-ink';

    const eyebrowClass = dark || !light ? 'text-brand-soft' : 'text-[#5B616A]';
    const bodyClass = dark || !light ? 'text-brand-soft' : 'text-[#5B616A]';

    this.innerHTML = `
      <section ${id ? `id="${id}"` : ''} class="${sectionClass}">
        <div class="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <div class="text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowClass}">${eyebrow}</div>
            <h2 class="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">${title}</h2>
          </div>
          <div>
            <p class="max-w-xl text-base leading-8 ${bodyClass} md:text-lg">${body}</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('text-section', TextSection);

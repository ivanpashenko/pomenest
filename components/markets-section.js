class MarketsSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || 'Markets';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const markets = JSON.parse(this.getAttribute('markets') || '[]');
    const markImage = this.getAttribute('mark-image') || '';

    this.innerHTML = `
      <section id="markets" class="border-b border-brand-line bg-brand-panel">
        <div class="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <div class="grid gap-12 md:grid-cols-[minmax(0,1fr)_380px] md:items-start">
            <div>
              <div class="text-xs font-semibold uppercase tracking-[0.22em] text-brand-soft">${eyebrow}</div>
              <h2 class="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">${title}</h2>
              <p class="mt-6 max-w-2xl text-base leading-8 text-brand-soft md:text-lg">${body}</p>
            </div>
            <div class="rounded-[28px] border border-white/10 bg-brand-panel2 p-6 md:p-8">
              <div class="mb-6 flex items-center gap-4">
                ${markImage ? `<img src="${markImage}" alt="Energy mark" class="h-12 w-12 object-contain" />` : ''}
                <div class="text-[10px] uppercase tracking-[0.34em] text-brand-soft">Regional node</div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                ${markets.map(item => `<div class="rounded-full border border-white/12 px-4 py-3 text-center text-sm text-brand-ink">${item}</div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('markets-section', MarketsSection);

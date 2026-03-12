class CtaSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || 'Next step';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const primaryLabel = this.getAttribute('primary-label') || 'Book a strategy call';
    const primaryHref = this.getAttribute('primary-href') || '#';
    const secondaryLabel = this.getAttribute('secondary-label') || 'Send an inquiry';
    const secondaryHref = this.getAttribute('secondary-href') || '#';

    this.innerHTML = `
      <section id="contact" class="border-b border-brand-line bg-brand-panel text-white">
        <div class="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <div class="rounded-[28px] border border-white/10 bg-brand-black px-8 py-10 md:px-12 md:py-14">
            <div class="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div>
                <div class="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">${eyebrow}</div>
                <h2 class="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">${title}</h2>
                <p class="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">${body}</p>
              </div>
              <div class="flex flex-wrap gap-3">
                <a href="${primaryHref}" class="rounded-full bg-brand-paper px-5 py-3 text-sm font-medium text-brand-panel">${primaryLabel}</a>
                <a href="${secondaryHref}" class="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white">${secondaryLabel}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('cta-section', CtaSection);

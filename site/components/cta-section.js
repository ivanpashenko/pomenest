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
      <section id="contact" class="bg-brand-canvas py-16 md:py-24">
        <div class="mx-auto max-w-content px-6 md:px-10">
          <div class="rounded-[32px] border border-brand-line bg-white px-8 py-16 md:px-16 md:py-20 shadow-xl">
            <div class="flex flex-col items-center text-center">
              <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${eyebrow}</div>
              <h2 class="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl">${title}</h2>
              <p class="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">${body}</p>
              <div class="mt-10 flex flex-wrap justify-center gap-4">
                <a href="${primaryHref}" class="rounded-full bg-brand-primary px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-primary/90">${primaryLabel}</a>
                <a href="${secondaryHref}" class="rounded-full border border-brand-ink px-7 py-3.5 text-base font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-white">${secondaryLabel}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('cta-section', CtaSection);

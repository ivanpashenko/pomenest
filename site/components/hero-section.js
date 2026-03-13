class HeroSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || '';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const primaryLabel = this.getAttribute('primary-label') || 'Book a strategy call';
    const primaryHref = this.getAttribute('primary-href') || '#contact';
    const secondaryLabel = this.getAttribute('secondary-label') || 'See capabilities';
    const secondaryHref = this.getAttribute('secondary-href') || '#capabilities';
    const energyImage = this.getAttribute('energy-image') || '';
    const logoImage = this.getAttribute('logo-image') || '';

    this.innerHTML = `
      <section id="top" class="pt-20 pb-24 md:pt-32 md:pb-32 bg-brand-canvas border-b border-brand-line">
        <div class="mx-auto max-w-content px-6 md:px-10 text-center">
          <h1 class="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-[64px]">
            ${title}
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-brand-muted leading-relaxed">
            ${body}
          </p>
          <div class="mt-10 flex justify-center">
            <a href="${primaryHref}" class="rounded-full bg-brand-primary px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-primary/90">
              ${primaryLabel}
            </a>
          </div>
          <div class="mt-20 flex justify-center">
            <div class="relative w-full max-w-5xl rounded-[2rem] overflow-hidden">
               <img src="${energyImage}" alt="Market Entry" class="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);

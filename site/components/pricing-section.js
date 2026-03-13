class PricingSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const sectionId = this.getAttribute('section-id') || 'pricing';
    const eyebrow = this.getAttribute('eyebrow') || 'Pricing';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const services = JSON.parse(this.getAttribute('services') || '[]');

    this.innerHTML = `
      <section id="${sectionId}" class="bg-brand-canvas py-16 md:py-24 border-b border-brand-line">
        <div class="mx-auto max-w-content px-6 md:px-10">
          <div class="max-w-3xl">
            <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${eyebrow}</div>
            <h2 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl">${title}</h2>
            <p class="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">${body}</p>
          </div>

          <div class="mt-12 grid gap-8">
            ${services.map((service) => `
              <article class="rounded-[32px] bg-white p-8 md:p-12 shadow-sm">
                <div class="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)]">
                  <div>
                    <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${service.meta || ''}</div>
                    <h3 class="mt-3 text-3xl font-bold text-brand-ink">${service.name}</h3>
                    <p class="mt-4 max-w-xl text-base leading-relaxed text-brand-muted">${service.description || ''}</p>

                    ${service.baseMetrics?.length && service.name === 'Early Market Validation' ? `
                      <div class="mt-8 border-t border-brand-line pt-8">
                        <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Base pricing logic</div>
                        <ul class="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted">
                          ${service.baseMetrics.map(metric => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${metric}</span></li>`).join('')}
                        </ul>
                      </div>
                    ` : ''}
                  </div>

                  <div class="grid gap-4 md:grid-cols-3">
                    ${service.tiers.map((tier) => `
                      <div class="rounded-2xl bg-brand-canvas/30 p-6">
                        <div class="text-xs font-bold uppercase tracking-widest text-brand-muted">${tier.name}</div>
                        <div class="mt-4 text-2xl font-bold text-brand-ink">${tier.price}</div>
                        <p class="mt-4 text-sm leading-relaxed text-brand-muted">${tier.target}</p>
                        ${tier.features?.length ? `
                          <ul class="mt-6 space-y-3 border-t border-brand-line pt-6 text-sm leading-relaxed text-brand-muted">
                            ${tier.features.map(feature => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink"></span><span>${feature}</span></li>`).join('')}
                          </ul>
                        ` : ''}
                      </div>
                    `).join('')}
                  </div>
                </div>
                ${service.addOns?.length ? `
                  <div class="mt-10 border-t border-brand-line pt-8">
                    <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Add-ons</div>
                    <ul class="mt-4 grid gap-4 text-sm leading-relaxed text-brand-muted md:grid-cols-2">
                      ${service.addOns.map(addOn => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${addOn}</span></li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('pricing-section', PricingSection);

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
          <div class="grid gap-20">
            ${services.map((service) => `
              <div>
                <div class="max-w-3xl">
                  <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${service.meta || eyebrow}</div>
                  <h2 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl">${service.name}</h2>
                </div>

                <div class="mt-12 grid gap-6 lg:grid-cols-4">
                  <div class="lg:col-span-1">
                    <p class="text-base leading-relaxed text-brand-muted">${service.description || ''}</p>
                    ${service.baseMetrics?.length ? `
                      <div class="mt-8 border-t border-brand-line pt-6">
                        <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Base pricing logic</div>
                        <ul class="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted">
                          ${service.baseMetrics.map(metric => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${metric}</span></li>`).join('')}
                        </ul>
                      </div>
                    ` : ''}
                  </div>

                  <div class="grid gap-4 md:grid-cols-3 lg:col-span-3">
                    ${service.tiers.map((tier) => `
                      <div class="flex h-full flex-col rounded-2xl bg-white p-6 md:p-8 shadow-sm">
                        <div class="min-h-[160px]">
                          <div class="text-xs font-bold uppercase tracking-widest text-brand-muted">${tier.name}</div>
                          <div class="mt-4 text-2xl font-bold text-brand-ink whitespace-pre-line">${String(tier.price).replace('Starting at ', 'Starting at\n')}</div>
                          <p class="mt-4 text-sm leading-relaxed text-brand-muted">${tier.target}</p>
                        </div>
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
                  <div class="mt-10 border-t border-brand-line pt-8 grid gap-6 lg:grid-cols-4">
                    <div class="lg:col-span-1">
                      <div class="text-2xl font-bold text-brand-ink">Add-ons</div>
                    </div>
                    <div class="lg:col-span-3">
                      <ul class="grid gap-4 text-sm leading-relaxed text-brand-muted">
                        ${service.addOns.map(addOn => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${addOn}</span></li>`).join('')}
                      </ul>
                    </div>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('pricing-section', PricingSection);

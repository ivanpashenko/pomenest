class PricingSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const sectionId = this.getAttribute('section-id') || 'pricing';
    const eyebrow = this.getAttribute('eyebrow') || '';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const services = JSON.parse(this.getAttribute('services') || '[]');
    const layout = this.getAttribute('layout') || 'grid';

    this.innerHTML = `
      <section id="${sectionId}" class="bg-brand-canvas py-16 md:py-24 border-b border-brand-line">
        <div class="mx-auto max-w-content px-6 md:px-10">
          <div class="grid gap-20">
            ${(title || body) ? `
              <div class="max-w-3xl">
                ${eyebrow ? `<div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${eyebrow}</div>` : ''}
                ${title ? `<h2 class="${eyebrow ? 'mt-4' : ''} text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl">${title}</h2>` : ''}
                ${body ? `<p class="mt-6 text-lg leading-relaxed text-brand-muted max-w-2xl">${body}</p>` : ''}
              </div>
            ` : ''}
            ${services.map((service) => `
              <div>
                ${(service.name || service.meta) ? `
                <div class="max-w-3xl">
                  ${service.meta ? `<div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${service.meta}</div>` : ''}
                  ${service.name ? `<h2 class="${service.meta ? 'mt-4' : ''} text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl">${service.name}</h2>` : ''}
                </div>
                ` : ''}

                <div class="mt-12 grid gap-6 lg:grid-cols-4">
                  <div class="lg:col-span-1">
                    ${service.description ? `<p class="text-base leading-relaxed text-brand-muted">${service.description}</p>` : ''}
                    ${service.baseMetrics?.length ? `
                      <div class="mt-8 border-t border-brand-line pt-6">
                        <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Base pricing logic</div>
                        <ul class="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted">
                          ${service.baseMetrics.map(metric => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${metric}</span></li>`).join('')}
                        </ul>
                      </div>
                    ` : ''}
                  </div>

                  <div class="${layout === 'stack' ? 'grid gap-3 lg:col-span-3' : 'grid gap-4 md:grid-cols-3 lg:col-span-3'}">
                    ${layout === 'stack' ? service.tiers.map((tier, index) => `
                      <details class="group rounded-2xl bg-white p-6 md:p-8 shadow-sm" ${index === 0 ? 'open' : ''}>
                        <summary class="flex cursor-pointer list-none items-start justify-between gap-6">
                          <div class="text-xl md:text-2xl font-bold leading-snug text-brand-ink">${tier.name}</div>
                          <div class="mt-1 shrink-0 text-brand-muted transition group-open:rotate-45">+</div>
                        </summary>
                        <div class="pt-5">
                          ${tier.target ? `<p class="text-base leading-relaxed text-brand-muted">${tier.target}</p>` : ''}
                          ${tier.features?.length ? `
                            <ul class="mt-5 space-y-3 border-t border-brand-line pt-5 text-sm leading-relaxed text-brand-muted">
                              ${tier.features.map(feature => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink"></span><span>${feature}</span></li>`).join('')}
                            </ul>
                          ` : ''}
                        </div>
                      </details>
                    `).join('') : service.tiers.map((tier) => `
                      <div class="flex h-full flex-col rounded-2xl bg-white p-6 md:p-8 shadow-sm">
                        <div class="min-h-[160px]">
                          <div class="text-lg md:text-xl font-bold leading-snug text-brand-ink">${tier.name}</div>
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

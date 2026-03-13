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
      <section id="${sectionId}" class="border-b border-[#B7B7B4] bg-brand-paper text-[#20242A]">
        <div class="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <div class="max-w-3xl">
            <div class="text-xs font-semibold uppercase tracking-[0.22em] text-[#6A7078]">${eyebrow}</div>
            <h2 class="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">${title}</h2>
            <p class="mt-6 max-w-2xl text-base leading-8 text-[#5B616A] md:text-lg">${body}</p>
          </div>

          <div class="mt-12 grid gap-5">
            ${services.map((service) => `
              <article class="rounded-[24px] border border-[#DDDCD6] bg-white p-6 md:p-8">
                <div class="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)]">
                  <div>
                    <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">${service.meta || ''}</div>
                    <h3 class="mt-3 text-2xl font-semibold tracking-[-0.03em]">${service.name}</h3>
                    <p class="mt-4 max-w-xl text-base leading-7 text-[#5B616A]">${service.description || ''}</p>

                    ${service.baseMetrics?.length && service.name === 'Early Market Validation' ? `
                      <div class="mt-6 border-t border-[#E7E5DF] pt-6">
                        <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">Base pricing logic</div>
                        <ul class="mt-4 space-y-3 text-sm leading-6 text-[#3F464E]">
                          ${service.baseMetrics.map(metric => `<li class="flex gap-3"><span class="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#20242A]"></span><span>${metric}</span></li>`).join('')}
                        </ul>
                      </div>
                    ` : ''}
                  </div>

                  <div class="grid gap-4 md:grid-cols-3">
                    ${service.tiers.map((tier) => `
                      <div class="rounded-[20px] bg-[#F8F7F3] p-5">
                        <div class="text-sm font-semibold uppercase tracking-[0.14em] text-[#6A7078]">${tier.name}</div>
                        <div class="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#20242A]">${tier.price}</div>
                        <p class="mt-4 text-sm leading-7 text-[#5B616A]">${tier.target}</p>
                        ${tier.features?.length ? `
                          <ul class="mt-5 space-y-3 border-t border-[#E7E5DF] pt-5 text-sm leading-6 text-[#3F464E]">
                            ${tier.features.map(feature => `<li class="flex gap-3"><span class="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#20242A]"></span><span>${feature}</span></li>`).join('')}
                          </ul>
                        ` : ''}
                      </div>
                    `).join('')}
                  </div>
                </div>
                ${service.addOns?.length ? `
                  <div class="mt-8 border-t border-[#E7E5DF] pt-6">
                    <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">Add-ons</div>
                    <ul class="mt-4 grid gap-3 text-sm leading-6 text-[#3F464E] md:grid-cols-2">
                      ${service.addOns.map(addOn => `<li class="flex gap-3"><span class="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#20242A]"></span><span>${addOn}</span></li>`).join('')}
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

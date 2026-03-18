class CapabilitiesSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const sectionId = this.getAttribute('section-id') || 'services';
    const eyebrow = this.getAttribute('eyebrow') || 'Capabilities';
    const title = this.getAttribute('title') || '';
    const items = JSON.parse(this.getAttribute('items') || '[]');
    const variant = this.getAttribute('variant') || 'default';
    const isAudience = variant === 'audience';
    const isDetailed = variant === 'detailed';
    const isNarrative = variant === 'narrative';
    const sectionClass = 'bg-brand-canvas py-16 md:py-24 border-b border-brand-line';
    const eyebrowClass = 'text-xs font-semibold uppercase tracking-widest text-brand-muted';
    const titleClass = 'mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl max-w-2xl';
    
    let gridHtml = '';
    
    if (isAudience) {
      // FOR WHOM layout
      gridHtml = `
        <div class="mt-12 flex flex-col gap-6">
          ${items.map((item, index) => {
            const isEven = index % 2 !== 0;
            return `
            <article class="flex flex-col md:flex-row items-stretch rounded-[32px] bg-white overflow-hidden min-h-[400px]">
              <div class="w-full md:w-1/2 overflow-hidden order-1 ${isEven ? 'md:order-1' : 'md:order-2'}">
                <img src="${item.image || ''}" class="w-full h-full object-cover" alt="" />
              </div>
              <div class="flex w-full md:w-1/2 flex-col justify-center px-10 py-16 text-center order-2 ${isEven ? 'md:order-2' : 'md:order-1'}">
                <div class="text-[10px] font-semibold uppercase tracking-widest text-brand-muted">${item.name}</div>
                <h3 class="mx-auto mt-6 max-w-md text-3xl font-bold leading-tight text-brand-ink">${item.title}</h3>
                <p class="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-muted">${item.body}</p>
              </div>
            </article>
          `}).join('')}
        </div>
      `;
    } else if (isDetailed) {
      // DETAILED layout (legacy)
      const service = items[0];
      if (service && service.buttons) {
        gridHtml = `
          <div class="mt-12 flex flex-col gap-16 md:gap-24">
            ${service.buttons.map((buttonData, i) => `
              <article id="${buttonData.label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}" class="group">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Solution ${i + 1}</div>
                <h3 class="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">${buttonData.label || ''}</h3>
                ${buttonData.subtitle ? `<p class="mt-6 max-w-2xl text-xl leading-relaxed text-brand-muted">${buttonData.subtitle}</p>` : ''}
              </article>
            `).join('')}
          </div>
        `;
      }
    } else if (isNarrative) {
      const service = items[0];
      if (service && service.narrative) {
        gridHtml = `
          <div class="mt-12 flex flex-col gap-12 md:gap-16">
            ${(service.narrative.sections || []).map((section) => `
              <article class="border-t border-brand-line pt-10 first:border-t-0 first:pt-0">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${section.eyebrow || ''}</div>
                ${section.title ? `<h3 class="mt-4 max-w-3xl text-3xl font-bold leading-tight text-brand-ink md:text-4xl">${section.title}</h3>` : ''}
                ${section.body ? `<p class="mt-4 max-w-2xl text-lg leading-relaxed text-brand-muted">${section.body}</p>` : ''}

                ${section.list?.length ? `
                  <ul class="mt-6 grid gap-4 md:grid-cols-2">
                    ${section.list.map((item) => `
                      <li class="flex gap-4 rounded-[24px] bg-white p-6 shadow-sm text-sm leading-relaxed text-brand-muted">
                        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span>
                        <span>${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}

                ${section.steps?.length ? `
                  <div class="mt-6 grid gap-4 md:grid-cols-2">
                    ${section.steps.map((step) => `
                      <div class="rounded-[24px] bg-white p-6 shadow-sm">
                        <div class="text-base font-bold text-brand-ink">${step.title}</div>
                        <p class="mt-3 text-sm leading-relaxed text-brand-muted">${step.body}</p>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </article>
            `).join('')}

            <article class="rounded-[32px] bg-white p-8 md:p-10 shadow-sm">
              <h3 class="max-w-2xl text-3xl font-bold leading-tight text-brand-ink md:text-4xl">${service.narrative.closingTitle || ''}</h3>
              <p class="mt-4 max-w-2xl text-lg leading-relaxed text-brand-muted">${service.narrative.closingBody || ''}</p>
              ${service.narrative.ctaLabel ? `
                <div class="mt-8">
                  <a href="mailto:hello@pomenest.com" class="inline-flex rounded-full bg-brand-primary px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-primary/90">${service.narrative.ctaLabel}</a>
                </div>
              ` : ''}
            </article>
          </div>
        `;
      }
    } else {
      // SERVICES layout (homepage)
      gridHtml = `
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          ${items.map((item) => {
            const serviceSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return `
            <div class="flex h-full flex-col gap-0">
              <article class="flex flex-1 flex-col rounded-[24px] bg-white p-8 md:p-10 shadow-sm">
                <h3 class="text-3xl font-bold leading-tight text-brand-ink">${item.name}</h3>
                <p class="mt-5 text-sm leading-relaxed text-brand-muted">${item.title || item.body}</p>
                
                ${item.bullets?.length ? `
                  <ul class="mt-8 space-y-3 text-sm leading-relaxed text-brand-muted">
                    ${item.bullets.map((bullet) => `
                      <li class="flex gap-3">
                        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span>
                        <span>${bullet}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}

                ${item.ctaLabel ? `
                  <div class="pt-8 mt-auto">
                    <a href="#/service/${item.id || serviceSlug}" class="inline-flex font-semibold text-brand-primary text-sm items-center gap-1 hover:opacity-80 transition">
                      ${item.ctaLabel} &rarr;
                    </a>
                  </div>
                ` : '<div class="pt-8"></div>'}
              </article>

              ${item.proof ? `
                <div class="min-h-[132px] px-8 md:px-10 py-4 flex flex-col justify-center">
                  ${item.proof.logos?.length ? `
                    <div class="flex flex-wrap items-center gap-4 md:gap-5 grayscale opacity-50 mix-blend-multiply ${item.id === 'early-market-validation' ? 'md:flex-nowrap' : ''}">
                      ${item.proof.logos.map((logo) => logo.image ? `<img src="${logo.image}" alt="${logo.alt || ''}" class="${item.id === 'early-market-validation' ? (logo.alt === 'Nestlé' ? 'h-6 md:h-5' : 'h-5 md:h-4') : (logo.alt === 'Kilometer Studios' ? 'h-6 md:h-5' : 'h-7')} w-auto object-contain" />` : '').join('')}
                    </div>
                  ` : ''}
                  ${item.proof.caption ? `<div class="mt-4 text-xs leading-relaxed text-brand-muted">${item.proof.caption}</div>` : ''}
                </div>
              ` : '<div class="min-h-[132px]"></div>'}
            </div>
          `}).join('')}
        </div>
      `;
    }

    this.innerHTML = `
      <section id="${sectionId}" class="${sectionClass}">
        <div class="mx-auto max-w-content px-6 md:px-10">
          ${!isDetailed ? `
          <div class="max-w-3xl">
            <div class="${eyebrowClass}">${eyebrow}</div>
            <h2 class="${titleClass}">${title}</h2>
          </div>
          ` : ''}
          ${gridHtml}
        </div>
      </section>
    `;
  }
}

customElements.define('capabilities-section', CapabilitiesSection);

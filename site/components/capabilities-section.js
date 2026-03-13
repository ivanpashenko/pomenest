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
              ${isEven ? `
                <div class="w-full md:w-1/2 overflow-hidden">
                  <img src="${item.image || ''}" class="w-full h-full object-cover" alt="" />
                </div>
              ` : ''}
              <div class="flex w-full md:w-1/2 flex-col justify-center px-10 py-16 text-center">
                <div class="text-[10px] font-semibold uppercase tracking-widest text-brand-muted">${item.name}</div>
                <h3 class="mx-auto mt-6 max-w-md text-3xl font-bold leading-tight text-brand-ink">${item.title}</h3>
                <p class="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-muted">${item.body}</p>
              </div>
              ${!isEven ? `
                <div class="w-full md:w-1/2 overflow-hidden">
                  <img src="${item.image || ''}" class="w-full h-full object-cover" alt="" />
                </div>
              ` : ''}
            </article>
          `}).join('')}
        </div>
      `;
    } else if (isDetailed) {
      // DETAILED layout (for service pages)
      const service = items[0];
      if (service && service.buttons) {
        gridHtml = `
          <div class="mt-12 flex flex-col gap-16 md:gap-24">
            ${service.buttons.map((buttonData, i) => `
              <article id="${buttonData.label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}" class="group">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Solution ${i + 1}</div>
                <h3 class="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">${buttonData.label || ''}</h3>
                ${buttonData.subtitle ? `<p class="mt-6 max-w-2xl text-xl leading-relaxed text-brand-muted">${buttonData.subtitle}</p>` : ''}

                ${buttonData.description ? `
                  <div class="mt-10 border-t border-brand-line pt-10">
                    <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">What it is</div>
                    <p class="mt-4 max-w-2xl text-lg leading-relaxed text-brand-muted">${buttonData.description}</p>
                  </div>
                ` : ''}

                ${buttonData.steps?.length ? `
                  <div class="mt-10 border-t border-brand-line pt-10">
                    <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">How it works</div>
                    <div class="mt-6 grid gap-6 md:grid-cols-${Math.min(buttonData.steps.length, 3)}">
                      ${buttonData.steps.map((step, index) => `
                        <div class="rounded-[24px] bg-white p-6 shadow-sm">
                          <div class="text-sm font-bold text-brand-ink">Step ${index + 1}</div>
                          <p class="mt-3 text-sm leading-relaxed text-brand-muted">${step}</p>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}

                ${(buttonData.outputs?.length || buttonData.idealFor?.length) ? `
                  <div class="mt-10 grid gap-6 border-t border-brand-line pt-10 md:grid-cols-2">
                    ${buttonData.outputs?.length ? `
                      <div class="rounded-[24px] bg-brand-surfaceAlt p-8 shadow-sm">
                        <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">What you get</div>
                        <ul class="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted">
                          ${buttonData.outputs.map(output => `<li class="flex gap-4"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${output}</span></li>`).join('')}
                        </ul>
                      </div>
                    ` : ''}
                    ${buttonData.idealFor?.length ? `
                      <div class="rounded-[24px] bg-brand-surfaceAlt p-8 shadow-sm">
                        <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Ideal for</div>
                        <ul class="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted">
                          ${buttonData.idealFor.map(target => `<li class="flex gap-4"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"></span><span>${target}</span></li>`).join('')}
                        </ul>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              </article>
            `).join('')}
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
            <article class="flex flex-col rounded-[24px] bg-white p-8 md:p-10 shadow-sm">
              <h3 class="text-3xl font-bold leading-tight text-brand-ink">${item.id === 'immersive-strategic-sessions' ? 'Immersive<br>Sessions' : item.name}</h3>
              <p class="mt-5 text-sm leading-relaxed text-brand-muted">${item.body}</p>
              
              ${item.buttons?.length ? `
                <div class="mt-auto pt-8 flex flex-col gap-4">
                  ${item.buttons.map((button) => {
                    const solutionSlug = (button.label || button).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `
                    <a href="#/service/${item.id || serviceSlug}#${solutionSlug}" class="inline-flex font-semibold text-brand-primary text-sm items-center gap-1 hover:opacity-80 transition">
                      ${button.label || button} &rarr;
                    </a>
                    `;
                  }).join('')}
                </div>
              ` : ''}
            </article>
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

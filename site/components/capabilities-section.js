class CapabilitiesSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const sectionId = this.getAttribute('section-id') || 'services';
    const eyebrow = this.getAttribute('eyebrow') || '';
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
      const iconMap = {
        'consumer interactions': 'groups',
        'consumer testing': 'groups',
        'product or concept testing': 'inventory_2',
        'product testing': 'inventory_2',
        'real purchase attempts or intent signals': 'shopping_cart',
        'positioning and message testing': 'campaign',
        'ugc-style feedback and reactions': 'smartphone',
        'structured field insights': 'insights',
        'a clearer yes / no / not yet signal': 'fork_right',
        'customer reactions grounded in reality': 'chat',
        'early pricing and positioning insights': 'sell',
        'evidence of what resonates most': 'network_intelligence',
        'a practical recommendation on next steps': 'explore',
        'validation summary': 'description',
        'key customer insights': 'lightbulb',
        'traction indicators': 'monitoring',
        'positioning observations': 'center_focus_strong',
        'recommended next move': 'arrow_outward',
        'a different way of seeing your business or idea': 'visibility',
        'unexpected insights that don’t come from analysis': 'psychology',
        'new angles on positioning, product or direction': 'explore',
        'shared understanding within your team': 'groups_2',
        'a shift in how you think about the market': 'sync_alt',
        'access to real people in the market': 'handshake',
        'unfiltered conversations': 'forum',
        'first-hand perspective on how things work': 'visibility',
        'early signals about opportunities or challenges': 'monitoring',
        'a more grounded understanding of the ecosystem': 'account_tree'
      };

      const imageMap = {
        '20–500 consumer interactions': './assets/images/service_val_interactions.png',
        'Product or concept testing': './assets/images/service_val_product_testing.png',
        'Real purchase attempts or intent signals': './assets/images/service_val_purchase.png',
        'Positioning and message testing': './assets/images/service_val_messaging.png',
        'UGC-style feedback and reactions': './assets/images/service_val_ugc.png',
        'Structured field insights': './assets/images/service_val_insights.png',
        'Guided movement through different locations': './assets/images/service_immersion_01.png',
        'Staged or semi-scripted interactions': './assets/images/service_immersion_02.png',
        'Situations that feel real, not performed': './assets/images/service_immersion_03.png',
        'Moments that challenge your usual roles and reactions': './assets/images/for_whom_leadership_03.png',
        'Space for informal reflection and conversation': './assets/images/for_whom_leadership_01.png',
        'Introductions to people we know': './assets/images/partner_access_01_introduction.png',
        'Connecting you with operators or ecosystem players': './assets/images/partner_access_02_followthrough.png',
        'Joining meetings when useful': './assets/images/partner_access_03_preparation.png',
        'Informal guidance before or after conversations': './assets/images/partner_access_04_debrief.png'
      };

      const getListImage = (item) => imageMap[String(item || '').trim()] || '';

      const renderMaterialIcon = (name, extraClass = '') => `
        <span class="material-symbols-outlined ${extraClass}" aria-hidden="true">${name}</span>
      `;

      const getListIcon = (item) => {
        const key = String(item || '').toLowerCase();
        return iconMap[key] || 'subdirectory_arrow_right';
      };

      const cleanStepTitle = (title) => String(title || '').replace(/^\d+\.\s*/, '');

      if (service && service.narrative) {
        const sections = service.narrative.sections || [];
        const intro = service.narrative.intro || '';

        gridHtml = `
          <div class="flex flex-col gap-14 md:gap-20">
            ${sections.map((section, sectionIndex) => {
              const isSteps = !!section.steps?.length;
              const isDeliverables = (section.eyebrow || '').toLowerCase() === 'deliverables';
              const hasList = !!section.list?.length;

              if (isSteps) {
                return `
                  <article class="${sectionIndex === 0 ? '' : 'border-t border-brand-line pt-12 md:pt-16'}">
                    ${section.eyebrow ? `<div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${section.eyebrow}</div>` : ''}
                    ${section.title ? `<h3 class="mt-4 max-w-3xl text-3xl font-bold leading-tight text-brand-ink md:text-[40px] md:leading-tight">${section.title}</h3>` : ''}
                    ${section.body ? `<p class="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted">${section.body}</p>` : ''}
                    <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                      ${section.steps.map((step, index) => `
                        <div class="relative rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 min-h-[220px] flex flex-col">
                          <div class="flex items-start justify-end gap-4">
                            <div class="text-4xl font-bold leading-none tracking-tight text-brand-line">0${index + 1}</div>
                          </div>
                          <div class="mt-8 text-lg font-bold leading-snug text-brand-ink">${cleanStepTitle(step.title)}</div>
                          <p class="mt-3 text-sm leading-relaxed text-brand-muted">${step.body}</p>
                        </div>
                      `).join('')}
                    </div>
                  </article>
                `;
              }

              if (isDeliverables) {
                return `
                  <article class="${sectionIndex === 0 ? '' : 'border-t border-brand-line pt-12 md:pt-16'} grid gap-10 md:grid-cols-2 md:items-start lg:gap-16">
                    <div>
                      ${section.eyebrow ? `<div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${section.eyebrow}</div>` : ''}
                      ${section.title ? `<h3 class="mt-4 max-w-[400px] text-3xl font-bold leading-tight text-brand-ink md:text-[40px] md:leading-tight">${section.title}</h3>` : ''}
                      ${section.body ? `<p class="mt-4 max-w-[400px] text-base leading-relaxed text-brand-muted">${section.body}</p>` : ''}
                    </div>
                    <div class="rounded-[32px] bg-white p-8 md:p-10 shadow-sm ring-1 ring-black/5">
                      <ul class="grid gap-4">
                        ${section.list.map((item) => `
                          <li class="flex items-center gap-4 rounded-[20px] border border-brand-line/70 bg-brand-canvas/30 px-5 py-4 text-base font-medium leading-relaxed text-brand-ink">
                            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                              ${renderMaterialIcon('check', 'text-[16px] leading-none')}
                            </span>
                            <span>${item}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </article>
                `;
              }

              const eyebrowKey = (section.eyebrow || '').toLowerCase();
              const isImageCardList = eyebrowKey === 'what we do' || eyebrowKey === 'what happens';
              const isWhatYouGet = eyebrowKey === 'what you get' || eyebrowKey === 'what you take from it';

              const renderImageTextCard = (item) => {
                const bgImage = getListImage(item);
                return `
                  <li class="rounded-[32px] bg-white overflow-hidden shadow-sm ring-1 ring-black/5 min-h-[220px]">
                    <div class="flex h-full flex-col sm:grid sm:min-h-[220px] sm:grid-cols-2">
                      <div class="relative h-52 bg-brand-canvas sm:h-full">
                        ${bgImage ? `<img src="${bgImage}" alt="${item}" class="absolute inset-0 h-full w-full object-cover" />` : ''}
                      </div>
                      <div class="flex items-center p-7 md:p-8">
                        <div class="text-[17px] font-bold leading-snug text-brand-ink">${item}</div>
                      </div>
                    </div>
                  </li>
                `;
              };

              const renderIconCard = (item) => `
                <li class="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 flex flex-col items-start ${isWhatYouGet ? 'min-h-[160px]' : ''}">
                  <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-canvas text-brand-ink">
                    ${renderMaterialIcon(getListIcon(item), 'text-[24px] leading-none')}
                  </div>
                  <div class="mt-6 text-base leading-relaxed text-brand-ink">${item}</div>
                </li>
              `;

              let gridClasses = 'md:grid-cols-2';
              if (isImageCardList) {
                gridClasses = 'md:grid-cols-2';
              } else if (isWhatYouGet) {
                gridClasses = 'md:grid-cols-5';
              }

              return `
                <article class="${sectionIndex === 0 ? '' : 'border-t border-brand-line pt-12 md:pt-16'}">
                  ${section.eyebrow ? `<div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${section.eyebrow}</div>` : ''}
                  ${section.title ? `<h3 class="mt-4 max-w-3xl text-3xl font-bold leading-tight text-brand-ink md:text-[40px] md:leading-tight">${section.title}</h3>` : ''}
                  ${section.body ? `<p class="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted">${section.body}</p>` : ''}
                  ${hasList ? `
                    <ul class="mt-8 grid gap-4 ${gridClasses}">
                      ${section.list.map((item) => isImageCardList ? renderImageTextCard(item) : renderIconCard(item)).join('')}
                    </ul>
                  ` : ''}
                </article>
              `;
            }).join('')}

            <article class="relative overflow-hidden rounded-[36px] bg-white p-8 md:p-12 shadow-sm ring-1 ring-black/5">
              <div class="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-primary/10 blur-2xl"></div>
              <div class="relative grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:items-end">
                <div>
                  <h3 class="max-w-3xl text-3xl font-bold leading-tight text-brand-ink md:text-5xl md:leading-tight">${service.narrative.closingTitle || ''}</h3>
                </div>
                <div>
                  <p class="text-base leading-relaxed text-brand-muted md:text-lg">${service.narrative.closingBody || ''}</p>
                  ${service.narrative.ctaLabel ? `
                    <div class="mt-8">
                      <a href="mailto:hello@pomenest.com" class="inline-flex rounded-full bg-brand-primary px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-primary/90">${service.narrative.ctaLabel}</a>
                    </div>
                  ` : ''}
                </div>
              </div>
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
          ${!isDetailed && (eyebrow || title) ? `
          <div class="max-w-3xl">
            ${eyebrow ? `<div class="${eyebrowClass}">${eyebrow}</div>` : ''}
            ${title ? `<h2 class="${titleClass}">${title}</h2>` : ''}
          </div>
          ` : ''}
          ${gridHtml}
        </div>
      </section>
    `;
  }
}

customElements.define('capabilities-section', CapabilitiesSection);

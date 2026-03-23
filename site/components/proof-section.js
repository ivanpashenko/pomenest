class ProofSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || 'Proof';
    const title = this.getAttribute('title') || '';
    const items = JSON.parse(this.getAttribute('items') || '[]');

    const arrowButton = (direction = 'right') => `
      <button class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink bg-transparent text-brand-ink transition-transform hover:-translate-y-0.5" aria-label="${direction === 'left' ? 'Previous' : 'Next'}">
        <svg viewBox="0 0 20 20" fill="none" class="h-4 w-4 ${direction === 'left' ? 'rotate-180' : ''}">
          <path d="M7 4.5L12.5 10L7 15.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    `;

    const renderItem = (item) => {
      if (item.type === 'stat') {
        const isBlue = item.tone === 'blue';
        const tone = isBlue ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-brand-ink border-brand-line/60';
        return `
          <article class="rounded-[28px] border ${tone} p-8 md:p-10 h-full flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div class="relative z-10 text-[11px] font-semibold uppercase tracking-[0.18em] ${isBlue ? 'text-white/70' : 'text-brand-muted'}">${item.eyebrow || ''}</div>
            <div class="relative z-10 mt-auto">
              <div class="text-[84px] md:text-[104px] font-semibold tracking-[-0.07em] leading-none">${item.value || ''}</div>
              <div class="mt-4 max-w-[280px] text-2xl md:text-[30px] font-medium leading-[1.02] ${isBlue ? 'text-white' : 'text-brand-ink'}">${item.title || ''}</div>
              ${item.body ? `<p class="mt-4 max-w-[290px] text-sm leading-relaxed ${isBlue ? 'text-white/72' : 'text-brand-muted'} hidden">${item.body}</p>` : ''}
            </div>
          </article>
        `;
      }

      if (item.type === 'featured-story') {
        return `
          <article class="group relative overflow-hidden rounded-[28px] h-full shadow-sm md:col-span-2 lg:col-span-2 flex flex-col p-8 md:p-10 min-h-[380px]">
            <img src="${item.image}" alt="${item.title || 'POME story'}" class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25 pointer-events-none"></div>
            <div class="relative z-10 flex flex-col h-full">
              <div class="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">${item.eyebrow || ''}</div>
              <div class="mt-auto">
                <h3 class="max-w-2xl text-[30px] md:text-[38px] font-medium leading-[1.02] tracking-[-0.05em] text-white">${item.title || ''}</h3>
                ${item.body ? `<p class="mt-4 max-w-xl text-base leading-relaxed text-white">${item.body}</p>` : ''}
                ${(item.meta || item.ctaLabel) ? `
                  <div class="mt-6 flex items-center gap-6">
                    ${item.ctaLabel ? `<a href="${item.ctaHref || '#ventures'}" class="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors">${item.ctaLabel}<span aria-hidden="true">↗</span></a>` : ''}
                  </div>
                ` : ''}
              </div>
            </div>
          </article>
        `;
      }

      if (item.type === 'region') {
        return `
          <article class="overflow-hidden rounded-[28px] bg-brand-ink h-full shadow-sm flex flex-col border border-brand-ink group">
            <div class="p-8 md:p-10 flex flex-col">
              <div class="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">${item.eyebrow || ''}</div>
              <h3 class="mt-4 max-w-sm text-[24px] md:text-[28px] font-medium leading-[1.1] tracking-[-0.04em] text-white">${item.title || ''}</h3>
              ${item.body ? `<p class="mt-3 text-sm leading-relaxed text-white/70">${item.body}</p>` : ''}
            </div>
            <div class="h-[180px] md:h-[220px] w-full relative mt-auto border-t border-white/10 overflow-hidden">
              <img src="${item.image}" alt="${item.title || ''}" class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            </div>
          </article>
        `;
      }

      if (item.type === 'faq-teaser') {
        return `
          <article class="rounded-[28px] bg-brand-softBlue p-8 md:p-10 h-full shadow-sm border border-brand-softBlueLine flex flex-col">
            <div class="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">${item.eyebrow || ''}</div>
            <div class="mt-4 text-[24px] md:text-[28px] font-medium leading-[1.08] tracking-[-0.04em] text-brand-ink">${item.question || ''}</div>
            ${item.answer ? `<p class="mt-4 max-w-sm text-base leading-relaxed text-brand-muted">${item.answer}</p>` : ''}
            <div class="mt-auto pt-8">
              <a href="${item.href || '#/faq'}" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">${item.linkLabel || 'See all FAQ'}<span aria-hidden="true">↗</span></a>
            </div>
          </article>
        `;
      }

      if (item.type === 'testimonial') {
        const reviews = item.reviews || [];
        const firstReview = reviews[0] || {};
        return `
          <article class="rounded-[28px] bg-white p-8 md:p-10 h-full shadow-sm border border-brand-line/60 flex flex-col justify-between md:col-span-2 lg:col-span-1 js-testimonial-card" data-reviews='${JSON.stringify(reviews)}' data-index="0">
            <div class="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">${item.eyebrow || ''}</div>
            <div class="mt-6">
              <p class="text-[24px] lg:text-[26px] font-medium leading-[1.1] tracking-[-0.04em] text-brand-ink js-testimonial-quote">“${firstReview.quote || ''}”</p>
            </div>
            <div class="mt-8 flex items-end justify-between gap-4">
              <div class="text-sm text-brand-muted js-testimonial-meta">${firstReview.author || ''}${firstReview.role ? `<br><span class="text-brand-ink">${firstReview.role}</span>` : ''}</div>
              <div class="flex items-center gap-2">
                <button class="js-testimonial-prev inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink bg-transparent text-brand-ink transition-transform hover:-translate-y-0.5" aria-label="Previous">
                  <svg viewBox="0 0 20 20" fill="none" class="h-4 w-4 rotate-180">
                    <path d="M7 4.5L12.5 10L7 15.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button class="js-testimonial-next inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink bg-transparent text-brand-ink transition-transform hover:-translate-y-0.5" aria-label="Next">
                  <svg viewBox="0 0 20 20" fill="none" class="h-4 w-4">
                    <path d="M7 4.5L12.5 10L7 15.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        `;
      }

      if (item.type === 'logo-cloud') {
        return `
          <article class="rounded-[28px] bg-white p-8 md:p-10 h-full shadow-sm border border-brand-line/60 flex flex-col">
            <div class="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">${item.eyebrow || ''}</div>
            <h3 class="mt-4 max-w-sm text-[24px] md:text-[28px] font-medium leading-tight tracking-[-0.04em] text-brand-ink">${item.title || ''}</h3>
            ${item.body ? `<p class="mt-3 max-w-sm text-sm leading-relaxed text-brand-muted">${item.body}</p>` : ''}
            <div class="mt-auto pt-6 flex flex-wrap items-center gap-x-8 gap-y-6">
              ${(item.logos || []).map(logo => {
                const classMap = {
                  'Amma': 'max-h-[30px] max-w-[114px]',
                  'Teleport': 'max-h-6 max-w-[118px]',
                  'Buzzaar': 'max-h-6 max-w-[106px]',
                  'Kilometer Studios': 'max-h-6 max-w-[120px]',
                  'Buzz': 'max-h-[26px] max-w-[104px]',
                  'Canal Creatures': 'max-h-[34px] max-w-[136px]'
                };
                const sizeClass = classMap[logo.alt] || 'max-h-6 max-w-[118px]';
                return `
                  <img src="${logo.image}" alt="${logo.alt || ''}" class="${sizeClass} w-auto object-contain grayscale opacity-40 mix-blend-multiply" />
                `;
              }).join('')}
            </div>
          </article>
        `;
      }

      return `
        <article class="rounded-[28px] border border-brand-line bg-white p-8 shadow-sm">
          <div class="text-xl font-semibold text-brand-ink">${item.title || ''}</div>
          <p class="mt-4 text-base leading-relaxed text-brand-muted">${item.body || ''}</p>
        </article>
      `;
    };

    this.innerHTML = `
      <section id="proof" class="border-b border-brand-line bg-brand-canvas text-brand-ink">
        <div class="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
          <div class="max-w-3xl">
            <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${eyebrow}</div>
            <h2 class="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">${title}</h2>
          </div>
          <div class="mt-12 grid gap-5 grid-flow-dense md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[380px]">
            ${items.map(renderItem).join('')}
          </div>
        </div>
      </section>
    `;

    const testimonialCard = this.querySelector('.js-testimonial-card');
    if (testimonialCard) {
      const reviews = JSON.parse(testimonialCard.dataset.reviews || '[]');
      const quoteEl = testimonialCard.querySelector('.js-testimonial-quote');
      const metaEl = testimonialCard.querySelector('.js-testimonial-meta');
      const prevBtn = testimonialCard.querySelector('.js-testimonial-prev');
      const nextBtn = testimonialCard.querySelector('.js-testimonial-next');

      const renderReview = (index) => {
        const review = reviews[index];
        if (!review) return;
        testimonialCard.dataset.index = String(index);
        quoteEl.innerHTML = `“${review.quote || ''}”`;
        metaEl.innerHTML = `${review.author || ''}${review.role ? `<br><span class="text-brand-ink">${review.role}</span>` : ''}`;
      };

      prevBtn?.addEventListener('click', () => {
        const current = Number(testimonialCard.dataset.index || 0);
        const nextIndex = (current - 1 + reviews.length) % reviews.length;
        renderReview(nextIndex);
      });

      nextBtn?.addEventListener('click', () => {
        const current = Number(testimonialCard.dataset.index || 0);
        const nextIndex = (current + 1) % reviews.length;
        renderReview(nextIndex);
      });
    }
  }
}

customElements.define('proof-section', ProofSection);

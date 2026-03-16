class ProofSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || 'Proof';
    const title = this.getAttribute('title') || '';
    const items = JSON.parse(this.getAttribute('items') || '[]');

    const renderItem = (item) => {
      if (item.type === 'stat') {
        const isBlue = item.tone === 'blue';
        const tone = isBlue ? 'bg-brand-primary text-white' : 'bg-white text-brand-ink';
        return `
          <article class="rounded-[28px] ${tone} p-8 md:p-10 h-full flex flex-col justify-between shadow-sm">
            <div class="text-[11px] font-semibold uppercase tracking-widest ${isBlue ? 'text-white/70' : 'text-brand-muted'}">${item.eyebrow || ''}</div>
            <div class="mt-auto">
              <div class="text-[80px] md:text-[96px] font-semibold tracking-[-0.06em] leading-none">${item.value || ''}</div>
              <div class="mt-4 max-w-[280px] text-2xl md:text-[28px] font-medium leading-tight text-white/90">${item.title || ''}</div>
            </div>
          </article>
        `;
      }

      if (item.type === 'wide-image-quote') {
        return `
          <article class="relative overflow-hidden rounded-[28px] h-full shadow-sm md:col-span-2 xl:col-span-2">
            <img src="${item.image}" alt="${item.author || 'POME proof'}" class="absolute inset-0 h-full w-full object-cover object-center object-[50%_38%]" />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            <div class="relative z-10 flex h-full flex-col p-8 md:p-10 text-white">
              <div class="text-[11px] font-semibold uppercase tracking-widest text-white/70 drop-shadow-md">${item.eyebrow || ''}</div>
              <div class="mt-auto max-w-2xl pb-1 drop-shadow-xl">
                <p class="text-2xl md:text-[32px] font-medium leading-tight tracking-[-0.04em]">“${item.quote || ''}”</p>
                <div class="mt-5 text-sm text-white/80">${item.author || ''}</div>
              </div>
            </div>
          </article>
        `;
      }

      if (item.type === 'logo-cloud') {
        return `
          <article class="rounded-[28px] bg-white p-8 md:p-10 h-full shadow-sm border border-brand-line/60 flex flex-col">
            <div class="text-[11px] font-semibold uppercase tracking-widest text-brand-muted">${item.eyebrow || ''}</div>
            <h3 class="mt-4 max-w-sm text-[28px] font-medium leading-tight tracking-[-0.04em] text-brand-ink">${item.title || ''}</h3>
            <div class="mt-auto pt-6 flex flex-wrap items-center gap-x-8 gap-y-6">
              ${(item.logos || []).map(logo => {
                const classMap = {
                  'Amma': 'max-h-[30px] max-w-[114px]',          // Чуть больше
                  'Teleport': 'max-h-6 max-w-[118px]',          // Без изменений
                  'Buzzaar': 'max-h-6 max-w-[106px]',           // Меньше
                  'Kilometer Studios': 'max-h-6 max-w-[120px]', // Меньше
                  'Buzz': 'max-h-[26px] max-w-[104px]',         // Чуть больше
                  'Canal Creatures': 'max-h-[34px] max-w-[136px]' // Больше
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

      if (item.type === 'facts') {
        return `
          <article class="rounded-[28px] bg-[#EEF0EA] p-8 md:p-10 h-full shadow-sm border border-brand-line/40 flex flex-col">
            <div class="text-[11px] font-semibold uppercase tracking-widest text-brand-muted">${item.eyebrow || ''}</div>
            <h3 class="mt-4 max-w-sm text-[28px] font-medium leading-tight tracking-[-0.04em] text-brand-ink">${item.title || ''}</h3>
            <div class="mt-auto pt-6 flex flex-wrap gap-2">
              ${(item.facts || []).map(fact => `<ui-tag variant="active">${fact}</ui-tag>`).join('')}
            </div>
          </article>
        `;
      }



      if (item.type === 'quote') {
        return `
          <article class="rounded-[28px] bg-[#F1ECE5] p-8 md:p-10 h-full shadow-sm border border-[#E2D8CB] flex flex-col justify-between">
            <div class="text-[11px] font-semibold uppercase tracking-widest text-brand-muted">${item.eyebrow || ''}</div>
            <div>
              <p class="max-w-md text-[30px] md:text-[34px] font-medium leading-[1.05] tracking-[-0.05em] text-brand-ink">“${item.quote || ''}”</p>
              <div class="mt-6 text-sm text-brand-muted">${item.author || ''}${item.role ? `<br><span class="text-brand-ink">${item.role}</span>` : ''}</div>
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
          <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3 md:auto-rows-[380px]">
            ${items.map(renderItem).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('proof-section', ProofSection);

class VenturesSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || 'Ventures';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const items = JSON.parse(this.getAttribute('items') || '[]');

    this.innerHTML = `
      <section id="ventures" class="bg-brand-canvas py-16 md:py-24 border-b border-brand-line">
        <div class="mx-auto max-w-content px-6 md:px-10">
          <div class="max-w-3xl">
            <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">${eyebrow}</div>
            <h2 class="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl">${title}</h2>
            <p class="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">${body}</p>
          </div>

          <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            ${items.map((item, index) => `
              <article class="overflow-hidden rounded-[24px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <button class="venture-open group flex h-full w-full flex-col text-left" type="button" data-venture-index="${index}">
                  <div class="relative flex min-h-[160px] items-center justify-center border-b border-brand-line bg-brand-canvas/30 p-6 md:min-h-[180px] md:p-8">
                    <div class="absolute left-4 top-4">
                      <span class="rounded-full border border-brand-line bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-muted">Backed by POME</span>
                    </div>
                    <div class="absolute right-4 top-4">
                      <span class="flex h-8 w-8 items-center justify-center rounded-full border border-brand-line bg-white text-sm leading-none text-brand-muted transition-colors group-hover:border-brand-ink group-hover:text-brand-ink">↗</span>
                    </div>
                    ${item.logo ? `<img src="${item.logo}" alt="${item.name}" class="h-auto w-auto max-h-[48px] max-w-[130px] object-contain md:max-h-[56px] md:max-w-[150px]" />` : ''}
                  </div>

                  <div class="flex flex-1 flex-col p-6 md:p-8">
                    <div class="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-brand-muted">
                      ${item.country ? `<span class="rounded-full border border-brand-line bg-brand-canvas/30 px-2.5 py-1">${item.country}</span>` : ''}
                    </div>
                    
                    <h3 class="text-2xl font-bold text-brand-ink">${item.name}</h3>
                    ${item.brandDescription ? `<div class="mt-1 text-sm font-semibold text-brand-muted">${item.brandDescription}</div>` : ''}
                    
                    <p class="mt-4 text-sm leading-relaxed text-brand-muted">${item.summary}</p>

                    ${item.servicesUsed?.length ? `
                      <div class="mt-auto pt-6">
                        <div class="flex flex-wrap gap-2">
                          ${item.servicesUsed.map(service => `<span class="rounded-full border border-brand-line bg-brand-canvas/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-ink">${service}</span>`).join('')}
                        </div>
                      </div>
                    ` : ''}
                  </div>
                </button>
              </article>
            `).join('')}
          </div>
        </div>

        <div class="venture-modal fixed inset-0 z-50 hidden overflow-y-auto">
          <div class="venture-backdrop fixed inset-0 bg-brand-ink/40 backdrop-blur-sm"></div>
          <div class="relative flex min-h-screen items-start justify-center p-4 md:p-8">
            <div class="venture-dialog relative my-8 w-full max-w-5xl overflow-hidden rounded-[34px] bg-white shadow-2xl">
              <button class="venture-close absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-canvas/50 text-xl text-brand-ink transition hover:bg-brand-canvas" type="button" aria-label="Close case">×</button>
              <div class="venture-modal-content"></div>
            </div>
          </div>
        </div>
      </section>
    `;

    const modal = this.querySelector('.venture-modal');
    const modalContent = this.querySelector('.venture-modal-content');
    const closeButton = this.querySelector('.venture-close');
    const backdrop = this.querySelector('.venture-backdrop');

    const openModal = (item) => {
      modalContent.innerHTML = `
        <div class="grid gap-0 lg:grid-cols-[380px_minmax(0,1fr)]">
          <div class="flex min-h-[320px] items-center justify-center border-b border-brand-line bg-brand-canvas/30 p-14 lg:min-h-full lg:border-b-0 lg:border-r lg:p-16">
            ${item.logo ? `<img src="${item.logo}" alt="${item.name}" class="max-h-[80px] w-auto max-w-[240px] object-contain lg:max-h-[100px] lg:max-w-[280px]" />` : ''}
          </div>

          <div class="p-8 md:p-10 lg:p-12 bg-white">
            <div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              ${item.country ? `<span class="rounded-full border border-brand-line bg-brand-canvas/30 px-2.5 py-1">${item.country}</span>` : ''}
              ${item.brandDescription ? `<span>${item.brandDescription}</span>` : ''}
            </div>
            
            <h3 class="mt-4 text-3xl font-bold md:text-4xl text-brand-ink">${item.name}</h3>
            ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline transition-all">Visit website <span class="text-[10px]">↗</span></a>` : ''}
            
            ${item.fullStory ? `
              <div class="mt-8">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">About the Brand</div>
                <p class="mt-3 max-w-2xl text-base leading-relaxed text-brand-muted">${item.fullStory}</p>
              </div>
            ` : ''}

            ${item.challenge ? `
              <div class="mt-8 border-t border-brand-line pt-8">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">The Challenge</div>
                <p class="mt-3 max-w-2xl text-base leading-relaxed text-brand-muted">${item.challenge}</p>
              </div>
            ` : ''}

            ${item.whatWeDid ? `
              <div class="mt-8 border-t border-brand-line pt-8">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">What We Did</div>
                <p class="mt-3 max-w-2xl text-base leading-relaxed text-brand-muted">${item.whatWeDid}</p>
              </div>
            ` : ''}

            ${item.outcome ? `
              <div class="mt-8 border-t border-brand-line pt-8">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">The Outcome</div>
                <p class="mt-3 max-w-2xl text-base leading-relaxed text-brand-muted">${item.outcome}</p>
              </div>
            ` : ''}

            ${item.servicesUsed?.length ? `
              <div class="mt-8 border-t border-brand-line pt-8">
                <div class="text-xs font-semibold uppercase tracking-widest text-brand-muted">Services Applied</div>
                <div class="mt-4 flex flex-wrap gap-2">
                  ${item.servicesUsed.map(service => `<span class="rounded-full border border-brand-line bg-brand-canvas/30 px-3 py-1.5 text-xs font-medium text-brand-ink">${service}</span>`).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
      modal.classList.add('hidden');
      modalContent.innerHTML = '';
      document.body.classList.remove('overflow-hidden');
    };

    this.querySelectorAll('.venture-open').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.getAttribute('data-venture-index'));
        openModal(items[index]);
      });
    });

    closeButton.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }
}

customElements.define('ventures-section', VenturesSection);

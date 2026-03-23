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
              <article class="overflow-hidden rounded-[24px] bg-white p-6 md:p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl border border-brand-line/50">
                <button class="venture-open group relative flex h-full w-full flex-col text-left" type="button" data-venture-index="${index}">
                  
                  <div class="flex w-full justify-start items-start mb-6 md:mb-7 h-[48px] pr-12">
                    ${item.logo ? `<img src="${item.logo}" alt="${item.name}" class="h-full w-auto max-w-[130px] object-contain object-left ${item.name === 'Canal Creatures' ? 'scale-[1.4] origin-left' : ''}" />` : `<h3 class="text-2xl font-bold">${item.name}</h3>`}
                  </div>

                  <div class="flex flex-1 flex-col">
                    ${item.country ? `<div class="text-[11px] font-medium uppercase tracking-widest text-brand-muted mb-3">${item.country}</div>` : ''}
                    
                    ${item.brandDescription ? `<h4 class="text-base text-brand-ink font-medium mb-1">${item.brandDescription}</h4>` : ''}
                    
                    <p class="text-base text-brand-muted leading-relaxed mb-5">${item.summary}</p>

                    ${item.servicesUsed?.length ? `
                      <div class="mt-auto flex flex-wrap gap-2 pr-12">
                        ${item.servicesUsed.map(service => `<ui-tag variant="active">${service}</ui-tag>`).join('')}
                      </div>
                    ` : ''}

                    <span class="absolute bottom-0 right-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink bg-transparent text-brand-ink transition-colors group-hover:bg-brand-ink group-hover:text-white" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none" class="h-4 w-4">
                        <path d="M6 14L14 6M8 6H14V12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
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
              <button class="venture-close absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink bg-transparent text-brand-ink transition-colors hover:bg-brand-ink hover:text-white" type="button" aria-label="Close case">
                <svg viewBox="0 0 20 20" fill="none" class="h-4 w-4" aria-hidden="true">
                  <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
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
        <div class="bg-white p-8 md:p-12 lg:p-16 w-full">
          <div class="flex flex-col md:flex-row w-full justify-between items-start mb-10 md:mb-12">
            <div>
              ${item.logo ? `<img src="${item.logo}" alt="${item.name}" class="h-auto w-auto max-h-[64px] max-w-[200px] object-contain object-left mb-6 ${item.name === 'Canal Creatures' ? 'scale-[1.4] origin-left' : ''}" />` : `<h3 class="text-3xl font-bold mb-6">${item.name}</h3>`}
              
              ${item.country ? `<div class="text-[12px] font-medium uppercase tracking-widest text-brand-muted mb-2">${item.country}</div>` : ''}
              ${item.brandDescription ? `<h4 class="text-lg md:text-xl text-brand-ink font-medium">${item.brandDescription}</h4>` : ''}
            </div>
            
            ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-opacity hover:opacity-80">${(() => { try { return new URL(item.link).hostname.replace(/^www\./, ''); } catch (e) { return item.link.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, ''); } })()}<svg viewBox="0 0 20 20" fill="none" class="h-3.5 w-3.5"><path d="M6 14L14 6M8 6H14V12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" /></svg></a>` : ''}
          </div>

          <div class="space-y-10">
            ${item.summary ? `
              <div>
                <p class="text-lg leading-relaxed text-brand-muted">${item.summary}</p>
              </div>
            ` : ''}

            ${item.challenge ? `
              <div class="border-t border-brand-line/50 pt-8">
                <div class="text-[11px] font-semibold uppercase tracking-widest text-brand-muted mb-3">The Challenge</div>
                <p class="text-lg leading-relaxed text-brand-muted">${item.challenge}</p>
              </div>
            ` : ''}

            ${item.whatWeDid ? `
              <div class="border-t border-brand-line/50 pt-8">
                <div class="text-[11px] font-semibold uppercase tracking-widest text-brand-muted mb-3">What We Did</div>
                <p class="text-lg leading-relaxed text-brand-muted">${item.whatWeDid}</p>
              </div>
            ` : ''}

            ${item.outcome ? `
              <div class="border-t border-brand-line/50 pt-8">
                <div class="text-[11px] font-semibold uppercase tracking-widest text-brand-muted mb-3">The Outcome</div>
                <p class="text-lg leading-relaxed text-brand-muted">${item.outcome}</p>
              </div>
            ` : ''}
          </div>

          ${item.servicesUsed?.length ? `
            <div class="mt-12 flex flex-wrap gap-2">
              ${item.servicesUsed.map(service => `<ui-tag variant="active">${service}</ui-tag>`).join('')}
            </div>
          ` : ''}
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

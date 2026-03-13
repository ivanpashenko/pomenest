class VenturesSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || 'Ventures';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const items = JSON.parse(this.getAttribute('items') || '[]');

    this.innerHTML = `
      <section id="ventures" class="border-b border-[#B7B7B4] bg-brand-paper text-[#20242A]">
        <div class="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
          <div class="max-w-3xl">
            <div class="text-xs font-semibold uppercase tracking-[0.22em] text-[#6A7078]">${eyebrow}</div>
            <h2 class="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">${title}</h2>
            <p class="mt-6 max-w-2xl text-base leading-8 text-[#5B616A] md:text-lg">${body}</p>
          </div>

          <div class="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            ${items.map((item, index) => `
              <article class="overflow-hidden rounded-[22px] border border-[#DDDCD6] bg-white transition duration-300 hover:-translate-y-[2px] hover:border-[#C9C7C0] hover:shadow-[0_20px_60px_rgba(24,28,32,0.08)]">
                <button class="venture-open group flex h-full w-full flex-col text-left" type="button" data-venture-index="${index}">
                  <div class="relative flex min-h-[160px] items-center justify-center border-b border-[#EEEDE8] bg-[#F8F7F3] p-6 md:min-h-[180px] md:p-8">
                    <div class="absolute left-4 top-4">
                      <span class="rounded-full border border-[#D9D9D6] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6A7078]">Backed by POME</span>
                    </div>
                    <div class="absolute right-4 top-4">
                      <span class="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D9D6] bg-white text-sm leading-none text-[#6A7078] transition-colors group-hover:border-[#B7B7B4] group-hover:text-[#20242A]">↗</span>
                    </div>
                    ${item.logo ? `<img src="${item.logo}" alt="${item.name}" class="h-auto w-auto max-h-[48px] max-w-[130px] object-contain md:max-h-[56px] md:max-w-[150px]" />` : ''}
                  </div>

                  <div class="flex flex-1 flex-col p-6 md:p-8">
                    <div class="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6A7078]">
                      ${item.country ? `<span class="rounded-full border border-[#D9D9D6] bg-[#F8F7F3] px-2.5 py-1">${item.country}</span>` : ''}
                    </div>
                    
                    <h3 class="text-xl font-semibold tracking-[-0.03em] text-[#20242A] md:text-2xl">${item.name}</h3>
                    ${item.brandDescription ? `<div class="mt-1 text-sm font-medium text-[#8A9097]">${item.brandDescription}</div>` : ''}
                    
                    <p class="mt-4 text-sm leading-6 text-[#5B616A]">${item.summary}</p>

                    ${item.servicesUsed?.length ? `
                      <div class="mt-auto pt-6">
                        <div class="flex flex-wrap gap-2">
                          ${item.servicesUsed.map(service => `<span class="rounded-full border border-[#D9D9D6] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3F464E]">${service}</span>`).join('')}
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
          <div class="venture-backdrop fixed inset-0 bg-black/58 backdrop-blur-[4px]"></div>
          <div class="relative flex min-h-screen items-start justify-center p-4 md:p-8">
            <div class="venture-dialog relative my-8 w-full max-w-5xl overflow-hidden rounded-[34px] bg-white shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
              <button class="venture-close absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#D9D9D6] bg-white text-xl text-[#20242A] transition hover:bg-[#F7F7F4]" type="button" aria-label="Close case">×</button>
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
          <div class="flex min-h-[320px] items-center justify-center border-b border-[#EEEDE8] bg-[#F8F7F3] p-14 lg:min-h-full lg:border-b-0 lg:border-r lg:p-16">
            ${item.logo ? `<img src="${item.logo}" alt="${item.name}" class="max-h-[80px] w-auto max-w-[240px] object-contain lg:max-h-[100px] lg:max-w-[280px]" />` : ''}
          </div>

          <div class="p-8 md:p-10 lg:p-12">
            <div class="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6A7078]">
              ${item.country ? `<span class="rounded-full border border-[#D9D9D6] bg-[#F8F7F3] px-2.5 py-1">${item.country}</span>` : ''}
              ${item.brandDescription ? `<span>${item.brandDescription}</span>` : ''}
            </div>
            
            <h3 class="mt-5 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">${item.name}</h3>
            
            ${item.fullStory ? `
              <div class="mt-8">
                <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">About the Brand</div>
                <p class="mt-3 max-w-2xl text-base leading-8 text-[#20242A]">${item.fullStory}</p>
              </div>
            ` : ''}

            ${item.challenge ? `
              <div class="mt-8 border-t border-[#EEEDE8] pt-8">
                <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">The Challenge</div>
                <p class="mt-3 max-w-2xl text-base leading-8 text-[#20242A]">${item.challenge}</p>
              </div>
            ` : ''}

            ${item.whatWeDid ? `
              <div class="mt-8 border-t border-[#EEEDE8] pt-8">
                <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">What We Did</div>
                <p class="mt-3 max-w-2xl text-base leading-8 text-[#20242A]">${item.whatWeDid}</p>
              </div>
            ` : ''}

            ${item.outcome ? `
              <div class="mt-8 border-t border-[#EEEDE8] pt-8">
                <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">The Outcome</div>
                <p class="mt-3 max-w-2xl text-base leading-8 text-[#20242A]">${item.outcome}</p>
              </div>
            ` : ''}

            ${item.servicesUsed?.length ? `
              <div class="mt-8 border-t border-[#EEEDE8] pt-8">
                <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">Services Applied</div>
                <div class="mt-4 flex flex-wrap gap-2">
                  ${item.servicesUsed.map(service => `<span class="rounded-full border border-[#D9D9D6] bg-white px-3 py-1.5 text-xs font-medium text-[#3A4047]">${service}</span>`).join('')}
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

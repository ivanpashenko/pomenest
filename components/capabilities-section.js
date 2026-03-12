class CapabilitiesSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const sectionId = this.getAttribute('section-id') || 'services';
    const eyebrow = this.getAttribute('eyebrow') || 'Capabilities';
    const title = this.getAttribute('title') || '';
    const items = JSON.parse(this.getAttribute('items') || '[]');
    const variant = this.getAttribute('variant') || 'default';
    const sectionClass = variant === 'audience'
      ? 'border-b border-[#B7B7B4] bg-brand-paper text-[#20242A]'
      : 'border-b border-brand-line bg-brand-panel';
    const eyebrowClass = variant === 'audience' ? 'text-[#6A7078]' : 'text-brand-soft';
    const cardClass = variant === 'audience'
      ? 'rounded-[20px] border border-[#DDDCD6] bg-white p-8 text-[#20242A] md:p-10'
      : 'rounded-[20px] bg-brand-paper p-8 text-[#20242A] md:p-10';
    const gridClass = variant === 'audience'
      ? 'mt-12 grid gap-4'
      : items.length === 3
        ? 'mt-12 grid gap-4 md:grid-cols-3'
        : 'mt-12 grid gap-4 md:grid-cols-2';

    this.innerHTML = `
      <section id="${sectionId}" class="${sectionClass}">
        <div class="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <div class="max-w-3xl">
            <div class="text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowClass}">${eyebrow}</div>
            <h2 class="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">${title}</h2>
          </div>
          <div class="${gridClass}">
            ${items.map((item, itemIndex) => `
              <article class="${cardClass}">
                <div class="text-xs font-semibold uppercase tracking-[0.22em] text-[#6A7078]">${item.name}</div>
                <h3 class="mt-6 text-2xl font-semibold tracking-[-0.03em]">${item.title}</h3>
                <p class="mt-4 max-w-xl text-base leading-8 text-[#5B616A]">${item.body}</p>
                ${item.buttons?.length ? `
                  <div class="mt-7 flex flex-wrap gap-2.5 border-t border-[#E7E5DF] pt-6">
                    ${item.buttons.map((button, buttonIndex) => `<button class="service-open rounded-full border border-[#D9D9D6] bg-white px-4 py-2 text-sm font-medium text-[#20242A] transition hover:bg-[#F5F4F0]" type="button" data-item-index="${itemIndex}" data-button-index="${buttonIndex}">${button.label || button}</button>`).join('')}
                  </div>
                ` : ''}
                ${item.services?.length ? `
                  <div class="mt-6 border-t border-[#E7E5DF] pt-6">
                    <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">Includes</div>
                    <ul class="mt-4 space-y-3 text-sm leading-6 text-[#3F464E]">
                      ${item.services.map(service => `<li class="flex gap-3"><span class="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#20242A]"></span><span>${service}</span></li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </article>
            `).join('')}
          </div>
        </div>

        <div class="service-modal fixed inset-0 z-50 hidden overflow-y-auto">
          <div class="service-backdrop fixed inset-0 bg-black/58 backdrop-blur-[4px]"></div>
          <div class="relative flex min-h-screen items-start justify-center p-4 md:p-8">
            <div class="relative my-8 w-full max-w-3xl overflow-hidden rounded-[30px] bg-white shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
              <button class="service-close absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#D9D9D6] bg-white text-xl text-[#20242A] transition hover:bg-[#F7F7F4]" type="button" aria-label="Close service">×</button>
              <div class="service-modal-content"></div>
            </div>
          </div>
        </div>
      </section>
    `;

    const modal = this.querySelector('.service-modal');
    const modalContent = this.querySelector('.service-modal-content');
    const closeButton = this.querySelector('.service-close');
    const backdrop = this.querySelector('.service-backdrop');

    const openModal = (item, button) => {
      const buttonData = typeof button === 'string' ? { label: button } : button;
      modalContent.innerHTML = `
        <div class="p-8 md:p-10 lg:p-12 text-[#20242A]">
          <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">${item.name}</div>
          <h3 class="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">${buttonData.label || ''}</h3>
          ${buttonData.subtitle ? `<p class="mt-5 max-w-2xl text-lg leading-8 text-[#5B616A]">${buttonData.subtitle}</p>` : ''}

          ${buttonData.description ? `
            <div class="mt-8 border-t border-[#EEEDE8] pt-8">
              <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">What it is</div>
              <p class="mt-4 max-w-2xl text-base leading-8 text-[#5B616A]">${buttonData.description}</p>
            </div>
          ` : ''}

          ${buttonData.steps?.length ? `
            <div class="mt-8 border-t border-[#EEEDE8] pt-8">
              <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">How it works</div>
              <div class="mt-5 space-y-4">
                ${buttonData.steps.map((step, index) => `
                  <div class="rounded-[18px] bg-[#F8F7F3] p-5">
                    <div class="text-sm font-semibold text-[#20242A]">Step ${index + 1}</div>
                    <p class="mt-2 text-sm leading-7 text-[#5B616A]">${step}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${(buttonData.outputs?.length || buttonData.idealFor?.length) ? `
            <div class="mt-8 grid gap-4 border-t border-[#EEEDE8] pt-8 md:grid-cols-2">
              ${buttonData.outputs?.length ? `
                <div class="rounded-[20px] bg-[#F8F7F3] p-6">
                  <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">What you get</div>
                  <ul class="mt-4 space-y-3 text-sm leading-6 text-[#3F464E]">
                    ${buttonData.outputs.map(output => `<li class="flex gap-3"><span class="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#20242A]"></span><span>${output}</span></li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${buttonData.idealFor?.length ? `
                <div class="rounded-[20px] bg-[#F8F7F3] p-6">
                  <div class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9097]">Ideal for</div>
                  <ul class="mt-4 space-y-3 text-sm leading-6 text-[#3F464E]">
                    ${buttonData.idealFor.map(target => `<li class="flex gap-3"><span class="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#20242A]"></span><span>${target}</span></li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          ` : ''}

          ${(buttonData.ctaLabel && buttonData.ctaHref) ? `
            <div class="mt-8 border-t border-[#EEEDE8] pt-8">
              <a href="${buttonData.ctaHref}" class="inline-flex rounded-full bg-[#20242A] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#111418]">${buttonData.ctaLabel}</a>
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

    this.querySelectorAll('.service-open').forEach((buttonEl) => {
      buttonEl.addEventListener('click', () => {
        const itemIndex = Number(buttonEl.getAttribute('data-item-index'));
        const buttonIndex = Number(buttonEl.getAttribute('data-button-index'));
        const item = items[itemIndex];
        const button = item.buttons?.[buttonIndex];
        openModal(item, button);
      });
    });

    closeButton?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }
}

customElements.define('capabilities-section', CapabilitiesSection);

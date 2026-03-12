class ProofSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || 'Proof';
    const title = this.getAttribute('title') || '';
    const items = JSON.parse(this.getAttribute('items') || '[]');

    this.innerHTML = `
      <section id="proof" class="border-b border-[#B7B7B4] bg-brand-paper text-[#20242A]">
        <div class="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <div class="max-w-3xl">
            <div class="text-xs font-semibold uppercase tracking-[0.22em] text-[#6A7078]">${eyebrow}</div>
            <h2 class="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">${title}</h2>
          </div>
          <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            ${items.map(item => `
              <article class="rounded-[22px] border border-[#D9D9D6] bg-white p-8">
                <div class="text-2xl font-semibold tracking-[-0.03em]">${item.name}</div>
                <p class="mt-4 text-base leading-8 text-[#5B616A]">${item.body}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('proof-section', ProofSection);

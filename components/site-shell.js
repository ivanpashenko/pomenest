class SiteShell extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const content = this.innerHTML;
    this.innerHTML = `
      <div class="min-h-screen bg-brand-canvas text-brand-ink">
        ${content}
      </div>
    `;
  }
}

customElements.define('site-shell', SiteShell);

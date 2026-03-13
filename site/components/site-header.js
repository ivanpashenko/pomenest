class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const brand = this.getAttribute('brand') || 'POME Nest';
    const links = JSON.parse(this.getAttribute('links') || '[]');
    const ctaLabel = this.getAttribute('cta-label') || 'Book a strategy call';
    const logoImage = this.getAttribute('logo-image') || '';
    const bg = this.getAttribute('bg') === 'white' ? 'bg-white/90' : 'bg-brand-canvas/90';
    const overlayBg = this.getAttribute('bg') === 'white' ? 'bg-white' : 'bg-brand-canvas';

    this.innerHTML = `
      <header id="main-header" class="sticky top-0 z-20 ${bg} backdrop-blur">
        <div class="mx-auto flex max-w-content items-center justify-between px-6 py-6 md:px-10">
          <a href="#top" class="flex items-center gap-3 z-50">
            ${logoImage ? `<img src="${logoImage}" alt="${brand}" class="h-8 w-auto relative z-50" />` : `<span class="text-sm font-semibold tracking-[0.18em] uppercase relative z-50">${brand}</span>`}
          </a>
          
          <nav class="hidden items-center gap-6 md:flex">
            ${links.map(link => {
              if (link.items) {
                return `
                  <div class="relative group py-2">
                    <button class="flex items-center gap-1 text-sm font-medium text-brand-ink/70 transition hover:text-brand-ink">
                      ${link.label}
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute left-0 top-full mt-0 hidden w-64 flex-col rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5 group-hover:flex">
                      ${link.items.map(subItem => `
                        <a href="${subItem.href}" class="block rounded-lg px-4 py-2 text-sm text-brand-ink/70 hover:bg-brand-canvas hover:text-brand-ink">${subItem.label}</a>
                      `).join('')}
                    </div>
                  </div>
                `;
              }
              return `<a href="${link.href}" class="text-sm font-medium text-brand-ink/70 transition hover:text-brand-ink py-2">${link.label}</a>`;
            }).join('')}
          </nav>

          <div class="flex items-center gap-4 z-50">
            <a href="#contact" target="_blank" class="hidden md:inline-flex rounded-full border border-brand-ink px-5 py-2 text-sm font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-brand-surface">${ctaLabel}</a>
            <button id="mobile-menu-btn" class="md:hidden p-2 -mr-2 text-brand-ink">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path class="menu-open-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path class="menu-close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu-overlay" class="fixed inset-0 ${overlayBg} z-40 flex-col items-center hidden opacity-0 transition-opacity duration-300 overflow-y-auto pt-24 pb-12 h-[100dvh] w-screen">
          <nav class="flex flex-col items-center gap-8 my-auto min-h-full w-full px-6">
            ${links.map((link, index) => {
              if (link.items) {
                return `
                  <div class="flex flex-col items-center w-full">
                    <button class="mobile-submenu-toggle flex items-center gap-2 text-2xl font-medium text-brand-ink hover:text-brand-ink/70 transition-colors" data-index="${index}">
                      ${link.label}
                      <svg class="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="mobile-submenu-content hidden flex-col items-center gap-4 mt-6 w-full" id="mobile-submenu-${index}">
                      ${link.items.map(subItem => `
                        <a href="${subItem.href}" class="text-lg font-medium text-brand-ink/70 hover:text-brand-ink transition-colors mobile-link text-center">${subItem.label}</a>
                      `).join('')}
                    </div>
                  </div>
                `;
              }
              return `<a href="${link.href}" class="text-2xl font-medium text-brand-ink hover:text-brand-ink/70 transition-colors mobile-link">${link.label}</a>`;
            }).join('')}
            <a href="#contact" class="mt-8 rounded-full border border-brand-ink px-8 py-4 text-lg font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-brand-surface mobile-link">${ctaLabel}</a>
          </nav>
        </div>
      </header>
    `;

    // Mobile menu logic
    const header = this.querySelector('#main-header');
    const menuBtn = this.querySelector('#mobile-menu-btn');
    const menuOverlay = this.querySelector('#mobile-menu-overlay');
    const openIcon = this.querySelector('.menu-open-icon');
    const closeIcon = this.querySelector('.menu-close-icon');
    const mobileLinks = this.querySelectorAll('.mobile-link');
    const submenuToggles = this.querySelectorAll('.mobile-submenu-toggle');
    
    let isMenuOpen = false;

    submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const index = toggle.getAttribute('data-index');
        const content = this.querySelector(`#mobile-submenu-${index}`);
        const icon = toggle.querySelector('svg');
        
        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          content.classList.add('flex');
          icon.classList.add('rotate-180');
        } else {
          content.classList.add('hidden');
          content.classList.remove('flex');
          icon.classList.remove('rotate-180');
        }
      });
    });

    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        header.classList.remove('backdrop-blur'); // remove to fix fixed-position containment
        menuOverlay.classList.remove('hidden');
        // trigger reflow
        void menuOverlay.offsetWidth;
        menuOverlay.classList.remove('opacity-0');
        menuOverlay.classList.add('flex');
        
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        menuOverlay.classList.add('opacity-0');
        setTimeout(() => {
          menuOverlay.classList.add('hidden');
          menuOverlay.classList.remove('flex');
          header.classList.add('backdrop-blur');
        }, 300);
        
        closeIcon.classList.add('hidden');
        openIcon.classList.remove('hidden');
        document.body.style.overflow = '';
      }
    };

    menuBtn.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
      });
    });
  }
}

customElements.define('site-header', SiteHeader);

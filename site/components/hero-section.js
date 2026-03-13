class HeroSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const eyebrow = this.getAttribute('eyebrow') || '';
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const primaryLabel = this.getAttribute('primary-label') || 'Book a strategy call';
    const primaryHref = this.getAttribute('primary-href') || '#contact';
    const secondaryLabel = this.getAttribute('secondary-label') || 'See capabilities';
    const secondaryHref = this.getAttribute('secondary-href') || '#capabilities';
    const energyImage = this.getAttribute('energy-image') || '';
    const logoImage = this.getAttribute('logo-image') || '';

    this.innerHTML = `
      <section id="top" class="pt-20 pb-12 md:pt-32 md:pb-32 bg-brand-canvas border-b border-brand-line overflow-hidden">
        <div class="mx-auto max-w-content px-6 md:px-10 text-center">
          <h1 class="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-[64px]">
            ${title}
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-brand-muted leading-relaxed">
            ${body}
          </p>
          <div class="mt-10 flex justify-center">
            <a href="${primaryHref}" target="_blank" class="rounded-full bg-brand-primary px-7 py-3.5 text-base font-semibold text-white transition hover:bg-brand-primary/90">
              ${primaryLabel}
            </a>
          </div>
          <div class="mt-20 flex flex-col md:block relative px-4 md:px-0 mx-auto max-w-5xl">
            <!-- Image Container -->
            <div class="relative w-full rounded-[2rem] aspect-[4/3] md:aspect-[16/9] shadow-2xl bg-black">
               <div class="absolute inset-0 overflow-hidden rounded-[2rem]">
                 <img src="${energyImage}" alt="Market Entry" class="absolute inset-0 w-full h-full object-cover opacity-90" />
               </div>
            </div>
               
            <!-- Popups Container -->
            <div class="mt-8 md:mt-0 -mb-8 md:mb-0 flex flex-col items-center gap-4 md:block md:absolute md:inset-0 w-full md:pointer-events-none z-10">
               <!-- Popup 1: Partner -->
               <div class="relative md:absolute md:top-[15%] md:right-[10%] z-10 md:z-10 will-change-transform md:pointer-events-auto" data-speed-mobile="-0.2" data-speed-desktop="-0.14" data-mobile-scale-start="180" data-mobile-scale-end="420" data-mobile-scale-min="0.72">
                 <div class="bg-[#1a1a1a]/40 backdrop-blur-xl border border-white/20 text-white p-4 rounded-2xl flex items-center gap-4 w-[320px] max-w-full md:w-[280px] shadow-2xl transform hover:scale-105 transition-transform duration-300 text-left mx-auto">
                   <img src="./assets/images/userpic_partner_01.png" alt="Partner" class="w-12 h-12 rounded-full object-cover shrink-0" />
                   <p class="text-[13px] font-medium leading-snug">Productive session. We are ready to move forward with the distribution agreement.</p>
                 </div>
               </div>

               <!-- Popup 2: Consumer -->
               <div class="relative -mt-[12px] md:absolute md:top-[45%] md:right-[-7%] z-20 md:z-10 will-change-transform md:pointer-events-auto" data-speed-mobile="-0.14" data-speed-desktop="-0.22" data-mobile-scale-start="320" data-mobile-scale-end="560" data-mobile-scale-min="0.84">
                 <div class="bg-[#1a1a1a]/40 backdrop-blur-xl border border-white/20 text-white p-4 rounded-2xl w-[320px] max-w-full md:w-[260px] shadow-2xl transform hover:scale-105 transition-transform duration-300 text-left mx-auto">
                   <div class="flex text-[#F59E0B] text-[10px] mb-2 gap-0.5">
                     <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                     <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                     <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                     <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                     <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                   </div>
                   <p class="text-[13px] leading-snug mb-3 text-left">Absolutely love it. Perfect for the our climate. I will definitely buy the full version.</p>
                   <div class="flex items-center justify-between border-t border-white/20 pt-3">
                      <div class="text-[11px] text-gray-300 text-left">Consumer Review<br/><span class="text-white font-medium text-[12px]">Singapore</span></div>
                      <img src="./assets/images/userpic_consumer_01.png" alt="Consumer" class="w-8 h-8 rounded-full object-cover shrink-0" />
                   </div>
                 </div>
               </div>

               <!-- Popup 3: Strategic -->
               <div class="relative -mt-[12px] md:absolute md:bottom-[15%] md:left-[46%] z-30 md:z-10 will-change-transform md:pointer-events-auto" data-speed-mobile="-0.08" data-speed-desktop="-0.12" data-mobile-scale-start="9999" data-mobile-scale-end="10000" data-mobile-scale-min="1">
                 <div class="bg-[#1a1a1a]/40 backdrop-blur-xl border border-white/20 text-white p-3 rounded-2xl flex items-center gap-3 w-[320px] max-w-full md:w-[280px] shadow-2xl transform hover:scale-105 transition-transform duration-300 text-left mx-auto">
                   <img src="./assets/images/for_whom_leadership_03.png" alt="Leadership" class="w-12 h-12 rounded-xl object-cover shrink-0" />
                   <p class="text-[12px] font-medium leading-tight text-left">Your journey begins. Today, the city is your boardroom. Ready for a new vision?</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    `;

    this._handleScroll = () => {
      if (!this.isConnected) return;
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;
      const parallaxEls = this.querySelectorAll('[data-speed-desktop]');
      parallaxEls.forEach(el => {
        const speedDesktop = parseFloat(el.getAttribute('data-speed-desktop'));
        const speedMobile = parseFloat(el.getAttribute('data-speed-mobile'));
        const speed = isMobile ? speedMobile : speedDesktop;
        const translateY = scrollY * speed;

        if (isMobile) {
          const scaleStart = parseFloat(el.getAttribute('data-mobile-scale-start') || '0');
          const scaleEnd = parseFloat(el.getAttribute('data-mobile-scale-end') || '1');
          const scaleMin = parseFloat(el.getAttribute('data-mobile-scale-min') || '0.75');
          const rawProgress = (scrollY - scaleStart) / (scaleEnd - scaleStart);
          const progress = Math.max(0, Math.min(1, rawProgress));
          const scale = 1 - ((1 - scaleMin) * progress);
          el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        } else {
          el.style.transform = `translateY(${translateY}px)`;
        }
      });
    };
    
    // Add scroll listener for parallax
    window.addEventListener('scroll', this._handleScroll, { passive: true });
  }

  disconnectedCallback() {
    if (this._handleScroll) {
      window.removeEventListener('scroll', this._handleScroll);
    }
  }
}

customElements.define('hero-section', HeroSection);

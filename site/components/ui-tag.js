class UiTag extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';

    const variant = this.getAttribute('variant') || 'active';
    
    const baseClasses = [
      'inline-flex', 'items-center', 'justify-center', 
      'rounded-full', 'border', 'border-brand-line',
      'px-3', 'py-1.5', 'text-[10px]', 'uppercase', 'tracking-widest', 
      'whitespace-nowrap', 'transition-colors', 'bg-white'
    ];
    
    if (variant === 'active') {
      baseClasses.push('text-brand-ink', 'font-bold');
    } else {
      baseClasses.push('text-brand-muted', 'font-medium', 'opacity-60');
    }

    this.classList.add(...baseClasses);
  }
}

customElements.define('ui-tag', UiTag);

import { Directive, ElementRef, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSelectionText]',
  inputs: ['testInput','data'],
  outputs: ['bankChange']
})
export class SelectionTextDirective {
  bankChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() appTooltip!: string;

  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    if (!this.tooltipElement) {
      this.tooltipElement = document.createElement('div');
      this.tooltipElement.className = 'tooltip';
      this.tooltipElement.textContent = this.appTooltip;
      this.el.nativeElement.appendChild(this.tooltipElement);
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.el.nativeElement.removeChild(this.tooltipElement);
      this.tooltipElement = null; 
    }
  }

}

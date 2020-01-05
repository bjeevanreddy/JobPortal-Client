import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective implements OnChanges {
  @HostBinding('src') imgsrc: any;
  @Input() cardNumber: any;
  constructor() { }
  ngOnChanges() {
    this.imgsrc = `assets/${this.getcardtype()}`;
  }
  getcardtype() {
    if (this.cardNumber) {
      if (this.cardNumber.startsWith('37')) {
        return 'mastercard.png';
      }
      else if (this.cardNumber.startsWith('4')) {
        return 'visa.jpg';
      }
      else if (this.cardNumber.startsWith('5')) {
        return 'americanexpress.png';
      } else {
        return 'mastercard.png';
      }
    }
    else {
      return 'mastercard.png';
    }
  }
}

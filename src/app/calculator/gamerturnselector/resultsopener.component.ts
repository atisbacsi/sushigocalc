import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'resultsopener',
  template: `<a (click)="onOpen()" class="resultopener">Results</a>`,
  styles: [`

  `]
})
export class ResultsOpenerComponent  {

  @Output() onResultOpen: EventEmitter<void> = new EventEmitter<void>();

  onOpen() : void {
    this.onResultOpen.emit();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Honour } from '../../../domain/honour';

@Component({
  selector: 'key',
  template: `<div class="key" (click)="clicked()" [class.key--wasabis]="honour.wasabis"><img src="assets/{{honour.icon}}" /><div class="key__label">{{honour.name}}</div></div>`,
  styleUrls: ["./key.component.css"]
})
export class KeyComponent  {
  @Input() honour: Honour;
  @Output() keyPressed = new EventEmitter<Honour>();
  clicked(): void {
    this.keyPressed.emit(this.honour);
  }
}

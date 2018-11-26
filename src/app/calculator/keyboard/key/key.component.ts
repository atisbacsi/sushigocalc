import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Honour } from '../../../domain/honour';

@Component({
  selector: 'key',
  template: `<div class="key" (click)="clicked()"><img src="assets/{{honour.icon}}" /><div class="key__label">{{honour.name}}</div></div>`,
  styles: [`
    div.key { 
      border-radius: 12px; 
      height: 15vh; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 2px 2px 2px hsl(0, 0%, 30%), 0 4px 4px 3px hsl(0, 0%, 75%)
              ;
    }
    div.key__label {
      flex: 0;
      text-align: center;
    }
    div.key img {
      width: 4em;
      height: 4em;
      align-self: center;
    }
    div.key:active {
      box-shadow: 0 0px 2px 2px hsl(0, 0%, 65%);
      transform: translateY(4px);
    }
    `]
})
export class KeyComponent  {
  @Input() honour: Honour;
  @Output() keyPressed = new EventEmitter<Honour>();
  clicked(): void {
    this.keyPressed.emit(this.honour);
  }
}

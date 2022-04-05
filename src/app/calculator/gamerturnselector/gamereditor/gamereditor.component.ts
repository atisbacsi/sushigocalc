import { Component, OnInit,  Output, Input, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Gamer } from '../../../domain/gamer';

@Component({
  selector: 'gamereditor',
  templateUrl: './gamereditor.component.html',
  styleUrls: ['./gamereditor.component.css']
})
export class GamereditorComponent implements OnInit {
  gamerName?: String;

  @Output('onClose') onCloseEvent = new EventEmitter<void>();

  @ViewChild("gamerNameInput")
  inputField?: ElementRef;

  @Input('gamer') gamer?: Gamer;

  constructor() { }

  ngOnInit() {
    this.inputField!.nativeElement.focus();
  }

  onClose():void {
    this.gamer!.name = this.gamerName!;
    this.onCloseEvent.emit();
  }

}

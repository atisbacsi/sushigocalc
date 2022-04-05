import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'makipopup',
  templateUrl: './makipopup.component.html',
  styleUrls: ['./makipopup.component.css']
})
export class MakipopupComponent implements OnInit {

  countOfMaki: number = 0;

  @ViewChild("countInput")
  inputField!: ElementRef;

  @Output('onClose') onCloseEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.inputField.nativeElement.focus();
  }

  onClose():void {
    this.onCloseEvent.emit(this.countOfMaki);
  }

}

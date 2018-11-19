import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'makipopup',
  templateUrl: './makipopup.component.html',
  styleUrls: ['./makipopup.component.css']
})
export class MakipopupComponent implements OnInit {

  countOfMaki: number = 0;

  @Output('onClose') onCloseEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onClose():void {
    this.onCloseEvent.emit(this.countOfMaki);
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  resultPageOpened: boolean = false;

  onResultOpen(): void {
    this.resultPageOpened = true;
  }

  onTurnSelected(): void {
    this.resultPageOpened = false;
  }
}
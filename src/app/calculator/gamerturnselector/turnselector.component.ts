import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TurnsService } from '../../service/turns.service';
import { Turn } from '../../domain/turn';


@Component({
  selector: 'turnselector',
  template: `
  <ul class="turnselector-layout">
    <li *ngFor="let turn of turns" [class.selected]="turn.selected">
      <a (click)="select(turn)">{{turn.name}}</a>
    </li>
  </ul>`,
  styleUrls: ['./turnselector.component.css']
})
export class TurnSelectorComponent  {

  @Output()
  onTurnSelected: EventEmitter<void> = new EventEmitter<void>();

  constructor(private turnsService: TurnsService) {

  }

  get turns(): Turn[] {
    return this.turnsService.getAllTurns();
  }

  private select(selectedTurn: Turn): void {
    this.turnsService.setSelectedTurn(selectedTurn);
    this.onTurnSelected.emit();
  }

}

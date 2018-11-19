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
  styles: [`
  .selected { color: blue; }
  .turnselector-layout {
    display: flex;
    list-style-type: none;
  }
  .turnselector-layout li {
    flex: 1 1 0;
    background-color: hsl(229, 80%, 80%);
    text-align: center;
  }

  `]
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

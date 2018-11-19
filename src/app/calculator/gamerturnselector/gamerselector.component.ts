import { Component, Input } from '@angular/core';
import { GamersService } from '../../service/gamers.service';
import { Gamer, GAMERS } from '../../domain/gamer';


@Component({
  selector: 'gamerselector',
  template: `
  <ul class="gamerselector-layout">
    <li *ngFor="let gamer of gamers" [class.selected]="gamer.selected">
      <a (click)="select(gamer)">{{gamer.name}}</a>
    </li>
    <li><a (click)="add()">+</a></li>    
  </ul>`,
  styles: [`
  .selected { color: blue; }
  .gamerselector-layout {
    display: flex;
    list-style-type: none;
  }
  .gamerselector-layout li {
    flex: auto;
    background-color: hsl(229, 90%, 90%);
    text-align: center;
  }
  `]
})
export class GamerSelectorComponent  {
  constructor(private gamersService: GamersService) {

  }

  get gamers(): Gamer[] {
    return this.gamersService.getAllGamers();
  }

  private select(selectedGamer: Gamer): void {
    this.gamersService.setSelectedGamer(selectedGamer);
  }
  add(): void {
    this.gamersService.addGamer();
  }
}

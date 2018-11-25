import { Component, Input } from '@angular/core';
import { GamersService } from '../../service/gamers.service';
import { Gamer, GAMERS } from '../../domain/gamer';


@Component({
  selector: 'gamerselector',
  template: `
  <ul class="gamerselector-layout">
    <li *ngFor="let gamer of gamers" [class.selected]="gamer.selected"  (click)="select(gamer)">
      <a>{{gamer.name}}</a>
    </li>
    <li (click)="add()"><a>+</a></li>    
  </ul>`,
  styleUrls: ['./gamerselector.component.css']
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

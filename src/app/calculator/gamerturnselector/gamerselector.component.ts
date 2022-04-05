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
    <li (click)="changeName()"><a class="gamerselector__editbtn">$</a></li>
  </ul>
  <gamereditor *ngIf="openGamerEditor" [gamer]="selectedGamer" (onClose)="closeGamerEditor()"></gamereditor>`,
  styleUrls: ['./gamerselector.component.css']
})
export class GamerSelectorComponent  {

  openGamerEditor : boolean = false;

  constructor(private gamersService: GamersService) {

  }

  get gamers(): Gamer[] {
    return this.gamersService.getAllGamers();
  }

  select(selectedGamer: Gamer): void {
    this.gamersService.setSelectedGamer(selectedGamer);
  }

  changeName() : void{
    this.openGamerEditor = true;
  }

  get selectedGamer(): Gamer {
    return this.gamersService.getSelectedGamer();
  }

  closeGamerEditor(){
    this.openGamerEditor = false;
  }
  add(): void {
    this.gamersService.addGamer();
  }
}

import { Component } from "@angular/core";
import { Gamer } from "../domain/gamer";
import { GamersService } from "../service/gamers.service";
import { TurnsService } from "../service/turns.service";
import { Turn } from "../domain/turn";
import { HonourBookingService } from "../service/honourbooking.service";

@Component({
  selector: 'result',
  template: `
    <div *ngFor="let turn of turns">
      <div class="name">{{turn.name}}</div>
      <div *ngFor="let gamer of gamers">{{gamer.name}} : {{getPoint(gamer, turn)}}</div>
    </div>
    <div>Final:
      <div *ngFor="let gamer of gamers">{{gamer.name}} : {{getFinalPoints(gamer)}}</div>
    </div>
    `,
  styles: [``]
})
export class ResultComponent {
  constructor(
    private gamerservice: GamersService,
    private turnservice: TurnsService,
    private honourbookingservice: HonourBookingService,
  ) { }
  get gamers(): Gamer[] {
    return this.gamerservice.getAllGamers();
  }
  get turns(): Turn[] {
    return this.turnservice.getAllTurns();
  }
  public getPoint(gamer: Gamer, turn: Turn): Number {
    return this.honourbookingservice.getSumByTurn(gamer, turn);
  }

  public getFinalPoints(gamer: Gamer): Number {
    return this.honourbookingservice.getSum(gamer);
  }
}
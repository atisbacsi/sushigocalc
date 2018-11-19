import { Injectable } from '@angular/core';
import { Gamer, GAMERS } from '../domain/gamer';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GamersService {
  defaultGamer: Gamer;
  gamerChanged: Subject<Gamer> = new Subject<Gamer>();

  constructor() {
    this.defaultGamer = this.getAllGamers()[0];
    this.defaultGamer.selected = true;
  }

  public getAllGamers(): Gamer[] {
    return GAMERS;
  }

  public getSelectedGamer(): Gamer {
    return this.defaultGamer;
  }

  public setSelectedGamer(gamer: Gamer) {
    this.defaultGamer.selected = false;
    this.defaultGamer = gamer;
    this.defaultGamer.selected = true;
    this.gamerChanged.next(gamer);
  }

  public gamerChange$(): Observable<Gamer> {
    return this.gamerChanged;
  }
  public addGamer(): void {
    let newGamerNum = GAMERS.length + 1;
    if (newGamerNum < 6) {
      GAMERS.push(
        new Gamer(newGamerNum, newGamerNum + '. Játékos')
      );
    }
  }
}
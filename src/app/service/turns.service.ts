import { Injectable } from '@angular/core';
import { Turn, TURNS } from '../domain/turn';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class TurnsService {
  defaultTurn: Turn;
  turnChanged: Subject<Turn> = new Subject<Turn>();

  constructor(){
    this.defaultTurn = this.getAllTurns()[0];
  }

  public getAllTurns(): Turn[] {
    return TURNS;
  }

  public getSelectedTurn(): Turn {
    return this.defaultTurn;
  }

  public setSelectedTurn(turn: Turn){
    this.defaultTurn.selected = false;
    this.defaultTurn = turn;
    this.defaultTurn.selected = true;
    this.turnChanged.next(turn);
  }

  public turnChange$(): Observable<Turn> {
    return this.turnChanged;
  }
}
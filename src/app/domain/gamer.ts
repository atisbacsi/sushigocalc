import { Turn, TURNS } from '../domain/turn';
import { HonourList } from '../domain/honourlist';
import { Honour } from '../domain/honour';
import { Subject } from 'rxjs/Subject';

export class Gamer {
  id: Number;
  name: String;
  selected: boolean;
  honours: Map<Turn, HonourList>;

  constructor(idParam: Number, nameParam: String) {
    this.id = idParam;
    this.name = nameParam;
    this.honours = new Map<Turn, HonourList>();

    for (var i = 0; i < TURNS.length; i++) {
      this.honours.set(TURNS[i], new HonourList());
    }

  }

  public getHonourListByTurn(turn: Turn): HonourList {
    return this.honours.get(turn);
  }

  public getHonourlistAll(): Honour[] {
    return TURNS.map(turn => this.honours.get(turn).honours).reduce((all, curr) => all.concat(curr), [] );
  }
}

export const GAMERS: Gamer[] = [
  new Gamer(1, '1. Játékos'),
  new Gamer(2, '2. Játékos'),
];

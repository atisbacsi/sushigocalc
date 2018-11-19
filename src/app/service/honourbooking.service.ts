import { Injectable } from '@angular/core';
import { Honour } from '../domain/honour';

import { HonourList } from '../domain/honourlist';

import { Gamer } from '../domain/gamer';
import { Turn, TURNS } from '../domain/turn';

import { GamersService } from '../service/gamers.service';
import { TurnsService } from '../service/turns.service';

@Injectable()
export class HonourBookingService {

  constructor(private gamersService: GamersService, private turnsService: TurnsService) {
  }

  public addHonour(honour: Honour, gamer: Gamer, turn: Turn) {
    let honours: HonourList;
    honours = gamer.getHonourListByTurn(turn);
    honours.pushHonour(honour);
    this.getSumByTurn(gamer, turn);
  }

  public addHonourToSelected(honour: Honour) {
    this.addHonour(honour, this.gamersService.getSelectedGamer(), this.turnsService.getSelectedTurn());
  }


  public getSelectedSum(): number {
    return this.getSumByTurn(this.gamersService.getSelectedGamer(), this.turnsService.getSelectedTurn());
  }

  public getSumByTurn(gamer: Gamer, turn: Turn): number {
    let honours: HonourList;
    honours = gamer.getHonourListByTurn(turn);
    let points = this.getSimpleHonourPoints(honours)
      + this.getGozgombocPoint(honours)
      + this.getMakiPoints(honours, turn)
      //      + this.getPudingPoints(gamer.getHonourlistAll())
      ;

    return points;
  }
  public getSum(gamer: Gamer): number {
    let points =
      TURNS.map(turn => this.getSumByTurn(gamer, turn)).reduce((sum, p) => sum + p, 0) +
      this.getPudingPoints(gamer.getHonourlistAll());
    return points;
  }

  private getPudingPoints(honours: Honour[]): number {
    let sajatPudingCount = this.getPudingCount(honours);

    let orderedPudingCounts = this.gamersService
      .getAllGamers()
      .map(g => g.getHonourlistAll())
      .map(honours => this.getPudingCount(honours))
      .sort((a, b) => a - b);
    let highest = orderedPudingCounts[orderedPudingCounts.length - 1];
    let lowest = orderedPudingCounts[0];

    let pudingpoints = 0;
    if (sajatPudingCount == highest) {
      let db = orderedPudingCounts.filter(p => p == highest).length;
      pudingpoints = 6 / db;
      pudingpoints = Math.floor(pudingpoints);
    }

    if (sajatPudingCount == lowest) {
      let db = orderedPudingCounts.filter(p => p == lowest).length;
      pudingpoints = -6 / db;
      pudingpoints = Math.ceil(pudingpoints);
    }

    return pudingpoints;
  }
  private getMakiPoints(honours: HonourList, turn: Turn) {
    let sajatMakiCount = this.getMakiCount(honours);

    let orderedMakiCounts = this.gamersService
      .getAllGamers()
      .map(g => g.getHonourListByTurn(turn))
      .map(honours => this.getMakiCount(honours))
      .sort((a, b) => a - b);
    let highest = orderedMakiCounts[orderedMakiCounts.length - 1];

    let notHighestButOrderedMakiCounts = orderedMakiCounts
      .filter(maki => maki < highest)
      .sort((a, b) => a - b);

    let secondHighest = notHighestButOrderedMakiCounts.pop();

    let makipoint = 0;
    if (highest > 0 && sajatMakiCount == highest) {
      let db = orderedMakiCounts.filter(maki => maki == highest).length;
      makipoint = 6 / db;
    }
    if (secondHighest > 0 && sajatMakiCount == secondHighest) {
      let db = orderedMakiCounts.filter(maki => maki == secondHighest).length;
      makipoint = 3 / db;
    }
    makipoint = Math.floor(makipoint);
    return makipoint;
  }

  private getSimpleHonourPoints(honours: HonourList): number {
    return honours.honours.filter(honour => honour.points > 0).map(honour => honour.points).reduce((sum, p) => sum + p, 0);
  }

  private getGozgombocCount(honours: HonourList): number {
    return honours.honours.filter(honour => honour.name == 'Gözgombóc').map(honour => 1).reduce((sum, p) => sum + p, 0);
  }

  private getGozgombocPoint(honours: HonourList): number {
    let count = this.getGozgombocCount(honours);
    if (count == 1) return 1;
    if (count == 2) return 3;
    if (count == 3) return 6;
    if (count == 4) return 10;
    if (count >= 5) return 15;
    else return 0;
  }

  private getMakiCount(honours: HonourList): number {
    return honours.honours.filter(honour => honour.name == 'Maki').map(honour => honour.param).reduce((sum, p) => sum + p, 0);
  }

  private getPudingCount(honours: Honour[]): number {
    return honours.filter(honour => honour.name == 'Puding').reduce(sum => sum + 1, 0);
  }
} 

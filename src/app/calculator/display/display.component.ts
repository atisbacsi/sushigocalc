import { Component, OnInit } from '@angular/core';
import { HonourList } from '../../domain/honourlist';

import { GamersService } from '../../service/gamers.service';
import { TurnsService } from '../../service/turns.service';
import { HonourBookingService } from '../../service/honourbooking.service';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  honourList: HonourList | undefined;

  constructor(
    private gamerService: GamersService,
    private turnsService: TurnsService,
    private honourBookingService: HonourBookingService
  ) {
    this.honourList = this.gamerService
      .getSelectedGamer()
      .getHonourListByTurn(this.turnsService.getSelectedTurn());
  }

  ngOnInit() {
    this.setSelectedHonourList();
    this.gamerService
      .gamerChange$()
      .subscribe((g) => this.setSelectedHonourList());
    this.turnsService
      .turnChange$()
      .subscribe((t) => this.setSelectedHonourList());
  }

  onDelete(): void {
    this.honourList?.popHonour();
  }

  private setSelectedHonourList(): void {
    this.honourList = this.gamerService
      .getSelectedGamer()
      .getHonourListByTurn(this.turnsService.getSelectedTurn());
  }

  get sum(): number {
    return this.honourBookingService.getSelectedSum();
  }
}

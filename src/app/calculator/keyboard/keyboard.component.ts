import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Honour } from '../../domain/honour';
import { HonourService } from '../../service/honour.service';
import { HonourBookingService } from '../../service/honourbooking.service';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent  {

  wasabiShifted: boolean = false;
  makiPopupOpen: boolean = false;

  constructor(
    private honourService: HonourService, 
    private honourBookingService: HonourBookingService
  ){  }

  onKeypressed(honour: Honour) : void {
    this.wasabiShifted = false;
    this.honourBookingService.addHonourToSelected(honour);
  }

  onWasabiShift(): void {
    this.wasabiShifted = true;
  }

  onMakiPopupOpen(): void {
    this.makiPopupOpen = true;
  }

  onMakiCountEvent(makiCount: number) : void {
    this.makiPopupOpen = false;
    let m: Honour = this.maki;
    m.param = makiCount;

    this.onKeypressed(m);
  }

  get maki(): Honour {
    return this.honourService.getMaki();
  } 

  get tempura(): Honour {
    return this.honourService.getTempura();
  }

  get sashimi(): Honour {
    return this.honourService.getSashimi();
  }

  get gozgomboc(): Honour {
    return this.honourService.getGozgomboc();
  }

  get puding(): Honour {
    return this.honourService.getPuding();
  }

  get wasabi(): Honour {
    return this.honourService.getWasabi();
  }

  get tojasNigiri(): Honour {
    return this.honourService.getTojasNigiri(this.wasabiShifted);
  }

  get lazacNigiri(): Honour {
    return this.honourService.getLazacNigiri(this.wasabiShifted);
  }

  get polipNigiri(): Honour {
    return this.honourService.getPolipNigiri(this.wasabiShifted);
  }
}

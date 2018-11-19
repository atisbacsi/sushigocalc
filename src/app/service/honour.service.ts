import { Injectable } from '@angular/core';
import { Honour } from '../domain/honour';

@Injectable()
export class HonourService {
  getTempura(): Honour {
    return {
      name: 'Tempura',
      points: 5,
      param: 0,
      icon: 'tempura.svg',
    };
  }

  getSashimi(): Honour {
    return {
      name: 'Sashimi',
      points: 10,
      param: 0,
      icon: 'sashimi.svg',
    };
  }

  getWasabi(): Honour {
    return {
      name: 'Wasabi',
      points: 0,
      param: 0,
      icon: 'wasabi.svg',
    };
  }

  getMaki(): Honour {
    return {
      name: 'Maki',
      points: 0,
      param: 0,
      icon: 'maki.svg',
    };
  }

  getPuding(): Honour {
    return {
      name: 'Puding',
      points: 0,
      param: 0,
      icon: 'puding.svg',
    };
  }

  getGozgomboc(): Honour {
    return {
      name: 'Gözgombóc',
      points: 0,
      param: 0,
      icon: 'gozgomboc.svg',
    };
  }

  getTojasNigiri(wasabi: boolean): Honour {
    return this.getNigiri('tojas', 1, wasabi);
  }

  getLazacNigiri(wasabi: boolean): Honour {
    return this.getNigiri('lazac', 2, wasabi);
  }

  getPolipNigiri(wasabi: boolean): Honour {
    return this.getNigiri('polip', 3, wasabi);
  }

  private getNigiri(name: String, value: number, wasabi: boolean): Honour {
    return {
      name: ((wasabi ? 'Wasabis ' : '') + name + ' nigiri'),
      points: (wasabi ? 3 * value : value),
      param: 0,
      icon: name + 'Nigiri.svg',
    }
  }
}
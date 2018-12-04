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
      wasabis: false,
    };
  }

  getSashimi(): Honour {
    return {
      name: 'Sashimi',
      points: 10,
      param: 0,
      icon: 'sashimi.svg',
      wasabis: false,
    };
  }

  getWasabi(): Honour {
    return {
      name: 'Wasabi',
      points: 0,
      param: 0,
      icon: 'wasabi.svg',
      wasabis: false,
    };
  }

  getMaki(): Honour {
    return {
      name: 'Maki',
      points: 0,
      param: 0,
      icon: 'maki.svg',
      wasabis: false,
    };
  }

  getPuding(): Honour {
    return {
      name: 'Puding',
      points: 0,
      param: 0,
      icon: 'puding.svg',
      wasabis: false,
    };
  }

  getGozgomboc(): Honour {
    return {
      name: 'Gözgombóc',
      points: 0,
      param: 0,
      icon: 'gozgomboc.svg',
      wasabis: false,
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
      wasabis: wasabi,
    }
  }
}
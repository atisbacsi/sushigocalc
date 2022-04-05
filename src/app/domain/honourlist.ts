import { Honour } from '../domain/honour';
import { Observable ,  Subject } from 'rxjs';
import { multicast, refCount } from 'rxjs/operators';

export class HonourList {
  honours: Honour[] = [];

  private honourChangedEvent: Subject<Honour> = new Subject();
  private helperSubject: Subject<Honour> = new Subject();
  private honourListObservable: Observable<Honour> = this.honourChangedEvent.pipe(multicast(this.helperSubject), refCount());

  constructor() {

  }
  pushHonour(honour: Honour): void {
    this.honours.push(honour);
    this.honourChangedEvent.next(honour);
  }

  popHonour(): Honour | undefined {
    const removedHonour =  this.honours.pop();
    if (removedHonour) {
      this.honourChangedEvent.next(removedHonour);
    }
    return removedHonour;
  }

  listChanges$(): Observable<Honour> {
    return this.honourListObservable;
  }
}

import { Honour } from '../domain/honour';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
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
  
  popHonour(): Honour {
    let removedHonour: Honour =  this.honours.pop();
    this.honourChangedEvent.next(removedHonour);
    return removedHonour;
  }

  listChanges$(): Observable<Honour> {
    return this.honourListObservable;
  }
}
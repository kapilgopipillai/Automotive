
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { timeInterval } from 'rxjs/operators';
 
@Injectable()
export class TimerService {
  source$ = new BehaviorSubject<number>(0);

  constructor() {
    setInterval(() => {
      const newVal = this.source$.getValue() + 1;
      this.source$.next(newVal);
    }, 1000);
  }

  public getObservable() {
    return this.source$.asObservable();
  }

  public stop(){
    this.source$.unsubscribe();
  }
}

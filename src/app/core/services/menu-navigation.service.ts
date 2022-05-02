import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MenuNavigationService {
  private showNav$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  getShowNav(): Observable<boolean> {
    return this.showNav$.asObservable();
  }

  setShowNav(showHide: boolean): void {
    this.showNav$.next(showHide);
  }

  isNavOpen(): boolean {
    return this.showNav$.value;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  isSidenavVisible: boolean = true;

  sidenavVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.sidenavVisibilityChange.subscribe((value) => {
      this.isSidenavVisible = value
    });
  }

  toggleSidebarVisibility(visible: boolean) {
    console.log(visible)
    this.sidenavVisibilityChange.next(visible);
  }
}

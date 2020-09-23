import { Component, OnInit, OnDestroy, HostListener, OnChanges } from '@angular/core';
import { NaveItem } from 'src/app/interfaces/navitem';
import { SidenavService } from 'src/app/services/sidenav.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  selectedItem = { id: 0 }
  isVisible: boolean = true
  constructor(
    public sidenavService: SidenavService
  ) {
  }

  sideNavItems = [{
    id: 1,
    name: 'View All Categories',
    route: '/dole'
  }, {
    id: 2,
    name: 'Healthy Ingredients',
    route: ''
  }, {
    id: 3,
    name: 'Healthy Snacks',
    route: ''
  }, {
    id: 4,
    name: 'Healthy Beverages',
    route: ''
  }, {
    id: 5,
    name: 'Healthy Meals',
    route: ''
  }, {
    id: 6,
    name: 'Functional Foods',
    route: ''
  }, {
    id: 7,
    name: 'Healthy Kids',
    route: ''
  }]


  ngOnInit() {
  }

  public toggleState(): void {
    this.sidenavService.toggleSidebarVisibility(true)
  }

  public onSideNavItemClick(item: NaveItem): void {
    this.sidenavService.toggleSidebarVisibility(true)
    this.selectedItem = item
  }
}

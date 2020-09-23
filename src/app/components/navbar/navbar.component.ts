import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NaveItem } from 'src/app/interfaces/navitem';
import { SidenavService } from 'src/app/services/sidenav.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedItem = {
    id: 0
  }

  constructor(
    private sidenavService: SidenavService
  ) {

  }

  ngOnInit() {

  }

  navItems = [{
    id: 1,
    name: 'Products',
    route: '/products'
  }, {
    id: 2,
    name: 'Our Purpose',
    route: '/purpose'
  }, {
    id: 3,
    name: 'Recipes',
    route: 'recipes'
  }]


  public onNavItemClick(item: NaveItem): void {
    if (item.id === 1)
      this.sidenavService.toggleSidebarVisibility(false)
    else
      this.sidenavService.toggleSidebarVisibility(true)
    this.selectedItem = item
  }
}

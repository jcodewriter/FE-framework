import { Component, OnInit } from '@angular/core';
import { NaveItem } from 'src/app/interfaces/navitem';
import { SidenavService } from 'src/app/services/sidenav.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {

  }

  selectedItem = {
    id: 0
  }

  navItems = [{
    id: 1,
    name: 'Home',
    src: 'assets/svg/home.svg',
    route: '/home'
  }, {
    id: 2,
    name: 'Products',
    src: 'assets/svg/pearch.svg',
    route: '/products'
  }, {
    id: 3,
    name: 'Recipes',
    src: 'assets/svg/my-recipes.svg',
    route: '/recipes'
  }, {
    id: 4,
    name: 'Mission',
    src: 'assets/svg/mission.svg',
    route: '/mission'
  }, {
    id: 5,
    name: 'My Dole',
    src: 'assets/svg/my-dole.svg',
    route: '/dole'
  }]

  ngOnInit() {

  }

  public onNavItemClick(item: NaveItem): void {
    if (item.id == 2)
      this.sidenavService.toggleSidebarVisibility(false)
    else
      this.sidenavService.toggleSidebarVisibility(true)
    this.selectedItem = item
  }
}

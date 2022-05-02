import { Component } from '@angular/core';
import { MenuNavigationService } from 'src/app/core/services/menu-navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isMobile = window.innerWidth <= 1023;

  constructor(private menuService: MenuNavigationService) {}

  showMenu(): void {
    this.menuService.setShowNav(true);
  }
}

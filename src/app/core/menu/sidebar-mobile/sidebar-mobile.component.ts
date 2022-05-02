import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuNavigationService } from 'src/app/core/services/menu-navigation.service';

@Component({
  selector: 'app-sidebar-mobile',
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.scss'],
})
export class SidebarMobileComponent implements OnInit {
  public isMobile = window.innerWidth <= 1023;
  public showSideNav!: Observable<boolean>;

  constructor(private menuService: MenuNavigationService) {}

  ngOnInit() {
    this.showSideNav = this.menuService.getShowNav();
  }

  onClose(): void {
    this.menuService.setShowNav(false);
  }
}

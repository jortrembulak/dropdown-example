import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuNavigationService } from './core/services/menu-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showSideNav!: Observable<boolean>;

  constructor(private menuService: MenuNavigationService) {}

  ngOnInit() {
    this.showSideNav = this.menuService.getShowNav();
  }

  onClose(): void {
    this.menuService.setShowNav(false);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 150) {
      let element = document.getElementById('navbar-header');
      element?.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar-header');
      element?.classList.remove('sticky');
    }
  }
}

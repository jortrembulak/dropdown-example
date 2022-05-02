import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { SidebarMobileComponent } from './menu/sidebar-mobile/sidebar-mobile.component';
import { MenuNavigationService } from './services/menu-navigation.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, SidebarMobileComponent],
  exports: [NavbarComponent, SidebarMobileComponent],
  providers: [MenuNavigationService],
})
export class CoreModule {}

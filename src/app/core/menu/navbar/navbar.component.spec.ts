/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuNavigationService } from '../../services/menu-navigation.service';
import { NavbarComponent } from './navbar.component';

describe(NavbarComponent.name, () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let menuService: MenuNavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],

      providers: [MenuNavigationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    menuService = TestBed.inject(MenuNavigationService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`${NavbarComponent.prototype.showMenu.name} should call setShowNav `, () => {
    const constTest = true;
    let spy = spyOn(menuService, 'setShowNav');

    component.showMenu();

    expect(spy).toHaveBeenCalledWith(constTest);
  });

  it(`${NavbarComponent.prototype.showMenu.name} should return isMobile as true if window.innerWidth less or equal than  1023`, () => {
    expect(component.isMobile).toBeLessThan(1023);
  });

  it(`should menu button has mobile-only`, () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');

    expect(button).toHaveClass('mobile-only');
  });
});

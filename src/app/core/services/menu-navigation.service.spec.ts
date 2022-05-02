import { TestBed } from '@angular/core/testing';
import { MenuNavigationService } from './menu-navigation.service';

describe(MenuNavigationService.name, () => {
  let service: MenuNavigationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuNavigationService],
    });

    service = TestBed.inject(MenuNavigationService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it(`${MenuNavigationService.prototype.getShowNav.name} should return an observable `, () => {
    service.getShowNav().subscribe((ret) => {
      expect(ret).toBe(false);
    });
  });

  it(`${MenuNavigationService.prototype.isNavOpen.name} should return variable value `, () => {
    const value = service.isNavOpen();
    expect(value).toBeFalse();
  });

  it(`${MenuNavigationService.prototype.setShowNav.name} should change de variable value `, () => {
    let value = false;
    service.getShowNav().subscribe((ret) => {
      value = ret;
    });

    expect(value).toBeFalse();

    service.setShowNav(true);

    expect(value).toBeTrue();
  });
});

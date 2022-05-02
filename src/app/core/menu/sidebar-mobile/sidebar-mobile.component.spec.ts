/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuNavigationService } from '../../services/menu-navigation.service';
import { SidebarMobileComponent } from './sidebar-mobile.component';

describe('SidebarMobileComponent', () => {
  let component: SidebarMobileComponent;
  let fixture: ComponentFixture<SidebarMobileComponent>;
  let menuService: MenuNavigationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarMobileComponent],
      providers: [MenuNavigationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMobileComponent);
    component = fixture.componentInstance;
    menuService = TestBed.inject(MenuNavigationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClose on button click', () => {
    spyOn(component, 'onClose');

    const button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();
    fixture.detectChanges();

    expect(component.onClose).toHaveBeenCalled();
  });

  it('should call setShowNav when onClose is called ', () => {
    let spy = spyOn(menuService, 'setShowNav');

    component.onClose();

    expect(spy).toHaveBeenCalledWith(false);
  });
});

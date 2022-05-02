import { Location } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { HomeModule } from './modules/home/home.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let router: Router;
  let location: Location;

  const routes: Routes = [
    {
      path: 'home',

      loadChildren: () => {
        return import('./modules/home/home.module').then((m) => m.HomeModule);
      },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), AppModule, HomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should navigate to home', fakeAsync(() => {
    router.navigate(['home']);

    tick();

    expect(location.path()).toBe('/home');
  }));

  // it('should showSideNav to be true ', fakeAsync(() => {
  //   // router.navigate(['home']);
  //   // tick();
  //   // expect(location.path()).toBe('/home');
  // }));

  it('should call onClose on overlay click', () => {
    //TODO
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLandingPageComponent } from './manager-landing-page.component';

describe('ManagerLandingPageComponent', () => {
  let component: ManagerLandingPageComponent;
  let fixture: ComponentFixture<ManagerLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

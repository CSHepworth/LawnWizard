import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnWizardLandingComponent } from './lawn-wizard-landing.component';

describe('LawnWizardLandingComponent', () => {
  let component: LawnWizardLandingComponent;
  let fixture: ComponentFixture<LawnWizardLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawnWizardLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawnWizardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

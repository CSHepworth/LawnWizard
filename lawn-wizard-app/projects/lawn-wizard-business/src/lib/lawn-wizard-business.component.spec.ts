import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnWizardBusinessComponent } from './lawn-wizard-business.component';

describe('LawnWizardBusinessComponent', () => {
  let component: LawnWizardBusinessComponent;
  let fixture: ComponentFixture<LawnWizardBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawnWizardBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawnWizardBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

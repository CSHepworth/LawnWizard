import { TestBed } from '@angular/core/testing';

import { LawnWizardLandingService } from './lawn-wizard-landing.service';

describe('LawnWizardLandingService', () => {
  let service: LawnWizardLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawnWizardLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

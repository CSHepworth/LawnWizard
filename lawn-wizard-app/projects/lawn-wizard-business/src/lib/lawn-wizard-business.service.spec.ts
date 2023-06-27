import { TestBed } from '@angular/core/testing';

import { LawnWizardBusinessService } from './lawn-wizard-business.service';

describe('LawnWizardBusinessService', () => {
  let service: LawnWizardBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawnWizardBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

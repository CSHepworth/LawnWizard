import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNavbarComponent } from './business-navbar.component';

describe('BusinessNavbarComponent', () => {
  let component: BusinessNavbarComponent;
  let fixture: ComponentFixture<BusinessNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawncareComponent } from './lawncare.component';

describe('LawncareComponent', () => {
  let component: LawncareComponent;
  let fixture: ComponentFixture<LawncareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawncareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawncareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

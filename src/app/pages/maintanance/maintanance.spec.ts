import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maintanance } from './maintanance';

describe('Maintanance', () => {
  let component: Maintanance;
  let fixture: ComponentFixture<Maintanance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maintanance],
    }).compileComponents();

    fixture = TestBed.createComponent(Maintanance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

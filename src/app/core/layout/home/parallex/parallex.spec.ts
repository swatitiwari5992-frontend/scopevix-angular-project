import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallex } from './parallex';

describe('Parallex', () => {
  let component: Parallex;
  let fixture: ComponentFixture<Parallex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parallex],
    }).compileComponents();

    fixture = TestBed.createComponent(Parallex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

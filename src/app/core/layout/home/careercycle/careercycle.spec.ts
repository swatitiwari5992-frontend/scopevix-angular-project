import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Careercycle } from './careercycle';

describe('Careercycle', () => {
  let component: Careercycle;
  let fixture: ComponentFixture<Careercycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Careercycle],
    }).compileComponents();

    fixture = TestBed.createComponent(Careercycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

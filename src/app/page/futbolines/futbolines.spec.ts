import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Futbolines } from './futbolines';

describe('Futbolines', () => {
  let component: Futbolines;
  let fixture: ComponentFixture<Futbolines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Futbolines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Futbolines);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

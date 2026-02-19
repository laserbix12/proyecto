import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airhockey } from './airhockey';

describe('Airhockey', () => {
  let component: Airhockey;
  let fixture: ComponentFixture<Airhockey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airhockey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Airhockey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

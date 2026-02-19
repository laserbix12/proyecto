import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Multijuegos } from './multijuegos';

describe('Multijuegos', () => {
  let component: Multijuegos;
  let fixture: ComponentFixture<Multijuegos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multijuegos, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multijuegos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

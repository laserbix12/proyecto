import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canastas } from './canastas';

describe('Canastas', () => {
  let component: Canastas;
  let fixture: ComponentFixture<Canastas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Canastas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canastas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Porterias } from './porterias';

describe('Porterias', () => {
  let component: Porterias;
  let fixture: ComponentFixture<Porterias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Porterias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Porterias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

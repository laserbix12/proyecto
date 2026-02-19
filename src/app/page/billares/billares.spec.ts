import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Billares } from './billares';

describe('Billares', () => {
  let component: Billares;
  let fixture: ComponentFixture<Billares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Billares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Billares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

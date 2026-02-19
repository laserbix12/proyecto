import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trampolines } from './trampolines';

describe('Trampolines', () => {
  let component: Trampolines;
  let fixture: ComponentFixture<Trampolines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trampolines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trampolines);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pingpong } from './pingpong';

describe('Pingpong', () => {
  let component: Pingpong;
  let fixture: ComponentFixture<Pingpong>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pingpong]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pingpong);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Pingpong } from './pingpong';

describe('Pingpong', () => {
  let service: Pingpong;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pingpong);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

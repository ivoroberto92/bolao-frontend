import { TestBed } from '@angular/core/testing';

import { MatchCreateService } from './match-create.service';

describe('MatchCreateService', () => {
  let service: MatchCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

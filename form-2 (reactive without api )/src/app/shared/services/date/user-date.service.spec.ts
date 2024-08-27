import { TestBed } from '@angular/core/testing';

import { UserDateService } from './user-date.service';

describe('UserDateService', () => {
  let service: UserDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddIsValidService } from './add-is-valid.service';

describe('AddIsValidService', () => {
  let service: AddIsValidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddIsValidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

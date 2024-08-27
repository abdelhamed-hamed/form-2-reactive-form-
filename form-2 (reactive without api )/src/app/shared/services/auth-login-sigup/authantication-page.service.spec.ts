import { TestBed } from '@angular/core/testing';

import { AuthanticationPageService } from './authantication-page.service';

describe('AuthanticationPageService', () => {
  let service: AuthanticationPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthanticationPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EnrollUserService } from './enroll-user.service';

describe('EnrollUserService', () => {
  let service: EnrollUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

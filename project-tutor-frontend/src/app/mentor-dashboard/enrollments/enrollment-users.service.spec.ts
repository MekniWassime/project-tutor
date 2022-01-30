import { TestBed } from '@angular/core/testing';

import { EnrollmentUsersService } from './enrollment-users.service';

describe('EnrollmentUsersService', () => {
  let service: EnrollmentUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollmentUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

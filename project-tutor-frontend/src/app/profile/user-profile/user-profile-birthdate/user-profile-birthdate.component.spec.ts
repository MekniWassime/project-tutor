import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileBirthdateComponent } from './user-profile-birthdate.component';

describe('UserProfileBirthdateComponent', () => {
  let component: UserProfileBirthdateComponent;
  let fixture: ComponentFixture<UserProfileBirthdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileBirthdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileBirthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

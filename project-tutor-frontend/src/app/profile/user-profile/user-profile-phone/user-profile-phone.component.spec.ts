import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePhoneComponent } from './user-profile-phone.component';

describe('UserProfilePhoneComponent', () => {
  let component: UserProfilePhoneComponent;
  let fixture: ComponentFixture<UserProfilePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilePhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

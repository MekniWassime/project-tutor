import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileEmailComponent } from './user-profile-email.component';

describe('UserProfileEmailComponent', () => {
  let component: UserProfileEmailComponent;
  let fixture: ComponentFixture<UserProfileEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileNameComponent } from './user-profile-name.component';

describe('UserProfileNameComponent', () => {
  let component: UserProfileNameComponent;
  let fixture: ComponentFixture<UserProfileNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

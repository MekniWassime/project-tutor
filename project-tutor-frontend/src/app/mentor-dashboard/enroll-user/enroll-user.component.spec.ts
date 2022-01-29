import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollUserComponent } from './enroll-user.component';

describe('EnrollUserComponent', () => {
  let component: EnrollUserComponent;
  let fixture: ComponentFixture<EnrollUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

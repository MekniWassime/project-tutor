import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInformationItemComponent } from './course-information-item.component';

describe('CourseInformationItemComponent', () => {
  let component: CourseInformationItemComponent;
  let fixture: ComponentFixture<CourseInformationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInformationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInformationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

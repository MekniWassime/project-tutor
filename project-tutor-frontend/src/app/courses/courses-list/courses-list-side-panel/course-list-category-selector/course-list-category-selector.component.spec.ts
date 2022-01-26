import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListCategorySelectorComponent } from './course-list-category-selector.component';

describe('CourseListCategorySelectorComponent', () => {
  let component: CourseListCategorySelectorComponent;
  let fixture: ComponentFixture<CourseListCategorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListCategorySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

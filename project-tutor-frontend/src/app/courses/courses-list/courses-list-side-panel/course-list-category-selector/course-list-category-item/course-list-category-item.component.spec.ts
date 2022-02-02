import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListCategoryItemComponent } from './course-list-category-item.component';

describe('CourseListCategoryItemComponent', () => {
  let component: CourseListCategoryItemComponent;
  let fixture: ComponentFixture<CourseListCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListCategoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

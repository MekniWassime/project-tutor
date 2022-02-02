import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListSearchBarComponent } from './course-list-search-bar.component';

describe('CourseListSearchBarComponent', () => {
  let component: CourseListSearchBarComponent;
  let fixture: ComponentFixture<CourseListSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

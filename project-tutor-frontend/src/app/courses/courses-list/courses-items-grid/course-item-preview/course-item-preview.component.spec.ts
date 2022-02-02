import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemPreviewComponent } from './course-item-preview.component';

describe('CourseItemPreviewComponent', () => {
  let component: CourseItemPreviewComponent;
  let fixture: ComponentFixture<CourseItemPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInformationsComponent } from './course-informations.component';

describe('CourseInformationsComponent', () => {
  let component: CourseInformationsComponent;
  let fixture: ComponentFixture<CourseInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

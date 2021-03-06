import { Router } from '@angular/router';
import { CourseCategoryUtility } from './../../../models/course-category';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from 'src/app/courses/models/course';

@Component({
  selector: 'app-course-item-preview',
  templateUrl: './course-item-preview.component.html',
  styleUrls: ['./course-item-preview.component.css']
})
export class CourseItemPreviewComponent implements OnInit, OnChanges {
  @Input('course') course!: Course;
  public categoryLabel: string = '';
  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    var courseChanges = changes['course'];
    if(courseChanges.isFirstChange())
      this.categoryLabel = CourseCategoryUtility.humanReadable(this.course.category);
  }

  onClick(): void{
    this.router.navigate(['courses', this.course.id])
  }

  ngOnInit(): void {
  }

}

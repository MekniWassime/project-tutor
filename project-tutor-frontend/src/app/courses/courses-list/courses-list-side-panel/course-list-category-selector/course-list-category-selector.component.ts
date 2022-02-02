import { CourseCategoryUtility } from './../../../models/course-category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list-category-selector',
  templateUrl: './course-list-category-selector.component.html',
  styleUrls: ['./course-list-category-selector.component.css']
})
export class CourseListCategorySelectorComponent implements OnInit {
  categories = CourseCategoryUtility.categories;
  constructor() { }

  ngOnInit(): void {
  }

}

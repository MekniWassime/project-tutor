import { CourseCategory } from './../models/course-category';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { Mentor } from '../models/mentor';
import { PaymentInfo } from '../models/payment-info';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course | undefined;

  constructor() { }

  async loadCourse(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.course = new Course(
      1,
      "course title",
      "When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope.",
      CourseCategory.Category1,
      5,
      "afafafa",
      new Mentor(1,"name faghe", "name.fgahe@gmail.com",new Date("14-01-1999"),98765432,'path','tutor'),
      [
        new PaymentInfo("package 1", 20, 2),
        new PaymentInfo("package 2", 30, 5),
        new PaymentInfo("package 3", 50, 10)
      ],
      "https://preview.colorlib.com/theme/edusmart/img/courses/xcourse-details.jpg.pagespeed.ic.F6AtKAlLP7.webp",
      4
    );
  }

  ngOnInit(): void {
    this.loadCourse()
  }

}

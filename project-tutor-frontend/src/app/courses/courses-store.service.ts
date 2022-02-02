import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from './models/course';
import { CourseCategory } from './models/course-category';
import { Mentor } from './models/mentor';
import { PaymentInfo } from './models/payment-info';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private coursesSubject = new BehaviorSubject<Course[]>([]);
  private stateSubject = new BehaviorSubject<StoreState>(StoreState.Loading);
  public readonly courses = this.coursesSubject.asObservable();
  public readonly state = this.stateSubject.asObservable();
  private page: number = 0;
  private pageSize: number = 5;
  constructor() { this.fetchCourses(); }

  async fetchCourses(): Promise<void> {
    var x = 0;
    while (true) {
      x++;
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.coursesSubject.next(this.coursesSubject.getValue().concat([new Course(
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
      )]));
      if(x==10) return;
    }
  }

}

export enum StoreState {
  Loading,
  HasData,
  NoData
}

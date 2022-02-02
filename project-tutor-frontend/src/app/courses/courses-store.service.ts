import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  constructor(private httpClient: HttpClient) {}

  async fetchCourses(params: any): Promise<void> {
    console.log("loading");
    this.httpClient.get<Course[]>("http://localhost:3000/course/findAll", {params:params} ).subscribe(courses => {
      courses.forEach((course) =>{
        course.mentor = new Mentor(1,"aaaaa", "aaaaaaa@gmail.com",new Date(1999,1,14,0,0,0,0), 55555555, "gghgjhgjhjg.jpg")
      })
      console.log(courses);
      console.log(courses[0].capacity)
      this.coursesSubject.next(courses);
    });
    
  }

}

export enum StoreState {
  Loading,
  HasData,
  NoData
}

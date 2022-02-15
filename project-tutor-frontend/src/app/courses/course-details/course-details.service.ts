import { HttpClient } from '@angular/common/http';
import { ServiceState } from './../../shared/models/service-state';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Review } from '../models/review';

@Injectable()
export class CourseDetailsService {
  private reviewsSubject = new BehaviorSubject<Review[] | undefined>(undefined);
  private courseSubject = new BehaviorSubject<Course | undefined>(undefined);
  public reviews = this.reviewsSubject.asObservable();
  public course = this.courseSubject.asObservable();

  constructor(private httpClient:HttpClient) { }

  public fetchCourseAndReviews(id:number){
    this.fetchCourse(id);
    this.fetchReviews(id);
  }

  private async fetchCourse(id:number){
    this.httpClient.get<Course>(`http://localhost:3000/course/${id}`).subscribe((course)=>{
      this.courseSubject.next(course);
      console.log(course)
    })
  } 

  private async fetchReviews(id:number){

  }


}

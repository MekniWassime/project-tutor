import { CourseDetailsService } from './course-details.service';
import { CourseCategory } from './../models/course-category';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { Mentor } from '../models/mentor';
import { PaymentInfo } from '../models/payment-info';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [CourseDetailsService]
})
export class CourseDetailsComponent implements OnInit {

  constructor(
    public courseService: CourseDetailsService,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if(params['id']) {
          console.log(params['id'])
          this.courseService.fetchCourseAndReviews(params['id']);
      }
  })
  }

  enroll():void{
    
  }

}

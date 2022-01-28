import { CourseDetailsService } from './../course-details.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';

@Component({
  selector: 'app-reviews-preview',
  templateUrl: './reviews-preview.component.html',
  styleUrls: ['./reviews-preview.component.css']
})
export class ReviewsPreviewComponent implements OnInit {

  constructor(public courseService: CourseDetailsService) { }

  ngOnInit(): void {
  }
}

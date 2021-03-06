import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/courses/models/review';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  @Input("review") review!: Review;
  constructor() { }

  ngOnInit(): void {
    this.review.userName
  }

}

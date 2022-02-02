import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';

@Component({
  selector: 'app-reviews-preview',
  templateUrl: './reviews-preview.component.html',
  styleUrls: ['./reviews-preview.component.css']
})
export class ReviewsPreviewComponent implements OnInit {
  //TODO: call backend service to get reviews, get id from route
  public reviews: Review[] | undefined;

  constructor(private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadCourse();
  }

  async loadCourse(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.reviews = [
      new Review(3, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.", "mekni wassime",1),
      new Review(4, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.", "dora gara",2),
      new Review(5, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.", "kammoun rami",3),
      new Review(3, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.", "kboubi oumaima",4),
    ]
    console.log("changed reviews list")
    this.ref.detectChanges();
  }

}

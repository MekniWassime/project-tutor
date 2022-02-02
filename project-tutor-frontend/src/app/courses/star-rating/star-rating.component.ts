import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  public stars: boolean[] = Array(5).fill(false);
  constructor() { }
  @Input('rating') public rating : number = 0;
  @Input('readonly') public readonlyInput: String | undefined;

  get readonly(): boolean { return this.readonlyInput !== undefined; }

  public rate(rating: number): void {
    if (this.readonly) return;
    this.stars = this.stars.map((_, index) => index < rating);
  }

  ngOnInit(): void {
    this.stars = this.stars.map((_, index) => index < this.rating);
  }

}

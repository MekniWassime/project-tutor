import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  @Input('rating') rating: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

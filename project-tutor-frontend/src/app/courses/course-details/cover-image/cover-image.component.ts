import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.css']
})
export class CoverImageComponent implements OnInit {
  @Input('image-source') imageSource: string = '';
  @Input('average-rating') averageRating: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

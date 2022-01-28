import { CourseDetailsService } from './../course-details.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.css']
})
export class CoverImageComponent implements OnInit {
  constructor(public courseService: CourseDetailsService) { }

  ngOnInit(): void {
  }

}

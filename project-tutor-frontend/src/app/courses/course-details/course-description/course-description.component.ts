import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.css']
})
export class CourseDescriptionComponent implements OnInit {

  @Input('description') description:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

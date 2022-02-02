import { Component, Input, OnInit } from '@angular/core';
import { EnrollmentModel } from 'src/app/mentor-dashboard/models/enrollment-model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input('enrollment') enrollment!: EnrollmentModel;

  constructor() { }

  ngOnInit(): void {
  }

}

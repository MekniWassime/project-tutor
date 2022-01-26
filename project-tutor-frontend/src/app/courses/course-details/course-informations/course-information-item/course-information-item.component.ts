import { PaymentInfo } from './../../../models/payment-info';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-information-item',
  templateUrl: './course-information-item.component.html',
  styleUrls: ['./course-information-item.component.css']
})
export class CourseInformationItemComponent implements OnInit {

  @Input("payment-info") paymentInfo!: PaymentInfo ;
  constructor() { }

  ngOnInit(): void {
  }

}

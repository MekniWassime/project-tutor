import { Component, Input, OnInit } from '@angular/core';
import { PaymentInfo } from '../../models/payment-info';

@Component({
  selector: 'app-course-informations',
  templateUrl: './course-informations.component.html',
  styleUrls: ['./course-informations.component.css']
})
export class CourseInformationsComponent implements OnInit {

  @Input("payment-info-list") paymentInfoList! : PaymentInfo[];
  constructor() { }

  ngOnInit(): void {
  }

}

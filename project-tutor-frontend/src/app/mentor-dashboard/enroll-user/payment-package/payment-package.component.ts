import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { PaymentInfo } from 'src/app/courses/models/payment-info';
import { PackageModel } from '../../models/package-model';

@Component({
  selector: 'app-payment-package',
  templateUrl: './payment-package.component.html',
  styleUrls: ['./payment-package.component.css']
})
export class PaymentPackageComponent implements OnInit {
  @Input('pack') pack!: PackageModel;
  selected = false;

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.selected = !this.selected
  }

}

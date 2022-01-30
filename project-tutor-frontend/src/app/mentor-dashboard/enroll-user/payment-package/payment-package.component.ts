import { Component, Input,  OnInit } from '@angular/core';
import { PackageModel } from '../../models/package-model';

@Component({
  selector: 'app-payment-package',
  templateUrl: './payment-package.component.html',
  styleUrls: ['./payment-package.component.css']
})
export class PaymentPackageComponent implements OnInit {
  @Input('pack') pack!: PackageModel;

  constructor() { }

  ngOnInit(): void {
  }

}

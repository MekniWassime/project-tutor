import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollUserComponent } from './enroll-user/enroll-user.component';
import { PaymentPackageComponent } from './enroll-user/payment-package/payment-package.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';



@NgModule({
  declarations: [
    EnrollUserComponent,
    PaymentPackageComponent,
    EnrollmentsComponent
  ],
  imports: [
    CommonModule
  ],
})
export class MentorDashboardModule { }

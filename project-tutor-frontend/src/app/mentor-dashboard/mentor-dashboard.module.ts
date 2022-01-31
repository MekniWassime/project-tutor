import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollUserComponent } from './enroll-user/enroll-user.component';
import { PaymentPackageComponent } from './enroll-user/payment-package/payment-package.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { UsersListComponent } from './enrollments/users-list/users-list.component';
import { UserCardComponent } from './enrollments/users-list/user-card/user-card.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { SessionCardComponent } from './sessions/sessions-list/session-card/session-card.component';
import { SchedularListComponent } from './sessions/schedular-list/schedular-list.component';
import { SchedularCardComponent } from './sessions/schedular-list/schedular-card/schedular-card.component';
import { RouterModule } from '@angular/router';
import { CreateSessionComponent } from './sessions/create-session/create-session.component';
import { CreateSchedularComponent } from './sessions/create-schedular/create-schedular.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EnrollUserComponent,
    PaymentPackageComponent,
    EnrollmentsComponent,
    UsersListComponent,
    UserCardComponent,
    SessionsComponent,
    SessionsListComponent,
    SessionCardComponent,
    SchedularListComponent,
    SchedularCardComponent,
    CreateSessionComponent,
    CreateSchedularComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
})
export class MentorDashboardModule { }

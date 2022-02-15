import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollUserComponent } from './mentor-dashboard/enroll-user/enroll-user.component';
import { MentorDashboardModule } from './mentor-dashboard/mentor-dashboard.module';
import { EnrollmentsComponent } from './mentor-dashboard/enrollments/enrollments.component';
import { SessionsComponent } from './mentor-dashboard/sessions/sessions.component';
import { SchedularListComponent } from './mentor-dashboard/sessions/schedular-list/schedular-list.component';
import { SessionsListComponent } from './mentor-dashboard/sessions/sessions-list/sessions-list.component';
import { CreateSessionComponent } from './mentor-dashboard/sessions/create-session/create-session.component';
import { CreateSchedularComponent } from './mentor-dashboard/sessions/create-schedular/create-schedular.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { EditUserProfileComponent } from './profile/edit-user-profile/edit-user-profile.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [{path:"login", component:LoginComponent},
{path:"register", component:RegisterComponent},
{path:"reset/password",component:ResetPasswordComponent},
{path:"user/profile/show",component: UserProfileComponent},
{path:"user/profile/edit",component: EditUserProfileComponent },
{path:'footer', component:FooterComponent},
{
  path: "courses", children: [
    { path: '', component: CoursesListComponent },
    { path: ':id', component: CourseDetailsComponent },
    { path: ':id/enroll', component: EnrollUserComponent },
  ]
},
{path:'landing', component:LandingComponent},
{path:'aboutus', component:AboutUsComponent},
{path:'contactus', component:ContactUsComponent},
{
  path: "mentorDashboard", children: [
    // { path: 'course/:id', component: CourseDetailsComponent,
    // children: [
      { path: '526666666', component: EnrollmentsComponent},
      { path: ':courseId/sessions', component: SessionsComponent,
        children:[
          { path: 'schedulars', component: SchedularListComponent },
          { path: 'sessions', component: SessionsListComponent},
          { path: 'createSession', component: CreateSessionComponent},
          { path: 'createSchedular', component: CreateSchedularComponent},

        ]},

    // ]},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, CoursesModule, MentorDashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

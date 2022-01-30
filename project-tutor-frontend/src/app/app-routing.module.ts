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

const routes: Routes = [{
  path: "courses", children: [
    { path: '', component: CoursesListComponent },
    { path: ':id', component: CourseDetailsComponent }
  ]
},
{
  path: "mentorDashboard", children: [
    // { path: 'course/:id', component: CourseDetailsComponent,
    // children: [
      { path: ':courseId/enroll/:userId', component: EnrollUserComponent },
      { path: ':courseId/enrollments', component: EnrollmentsComponent},
      { path: ':courseId/sessions', component: SessionsComponent, 
        children:[
          { path: 'schedulars', component: SchedularListComponent },
          { path: 'sessions', component: SessionsListComponent}
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

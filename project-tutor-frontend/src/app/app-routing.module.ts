import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollUserComponent } from './mentor-dashboard/enroll-user/enroll-user.component';
import { MentorDashboardModule } from './mentor-dashboard/mentor-dashboard.module';

const routes: Routes = [{
  path: "courses", children: [
    { path: '', component: CoursesListComponent },
    { path: ':id', component: CourseDetailsComponent }
  ]
},
{
  path: "mentorDashboard", children: [
    // { path: ':id', component: CourseDetailsComponent },
    { path: 'enroll/:courseId/:userId', component: EnrollUserComponent }

    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, CoursesModule, MentorDashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

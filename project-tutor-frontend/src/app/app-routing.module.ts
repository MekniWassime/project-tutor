import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "courses", children: [
    { path: '', component: CoursesListComponent },
    { path: ':id', component: CourseDetailsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, CoursesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

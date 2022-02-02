import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EditUserProfileComponent } from './profile/edit-user-profile/edit-user-profile.component';

const routes: Routes = [
  {
    path: "courses", children: [
      { path: '', component: CoursesListComponent },
      { path: ':id', component: CourseDetailsComponent }
   ]
  },
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"reset/password",component:ResetPasswordComponent},
  {path:"user/profile/show",component: UserProfileComponent},
  {path:"user/profile/edit",component: EditUserProfileComponent },
  {path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, CoursesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

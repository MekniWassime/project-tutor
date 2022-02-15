import { AuthTokenInterceptors } from './auth/auth.token.interceptors';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SharedModule } from './shared/shared.module';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { EditUserProfileComponent } from './profile/edit-user-profile/edit-user-profile.component';
import { UserProfileNameComponent } from './profile/user-profile/user-profile-name/user-profile-name.component';
import { UserProfileImageComponent } from './profile/user-profile/user-profile-image/user-profile-image.component';
import { UserProfileEmailComponent } from './profile/user-profile/user-profile-email/user-profile-email.component';
import { UserProfileBirthdateComponent } from './profile/user-profile/user-profile-birthdate/user-profile-birthdate.component';
import { UserProfilePhoneComponent } from './profile/user-profile/user-profile-phone/user-profile-phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { SessionsComponent } from './mentor-dashboard/sessions/sessions.component';
import { AuthService } from './auth.service';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VerifyTokenComponent } from './verify-token/verify-token.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    UserProfileNameComponent,
    UserProfileImageComponent,
    UserProfileEmailComponent,
    UserProfileBirthdateComponent,
    UserProfilePhoneComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent,
    VerifyTokenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    HttpClientModule,
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptors, multi: true },],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }

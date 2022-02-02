import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingSpinnerComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule
  ]
})
export class SharedModule { }

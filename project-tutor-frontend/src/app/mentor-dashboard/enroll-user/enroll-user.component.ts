import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageModel } from '../models/package-model';
import { EnrollUserService } from './enroll-user.service';

@Component({
  selector: 'app-enroll-user',
  templateUrl: './enroll-user.component.html',
  styleUrls: ['./enroll-user.component.css']
})
export class EnrollUserComponent implements OnInit {

  constructor(
    public enrollmentService: EnrollUserService,
    private activeRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  userId = '';
  couresId = ''

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.couresId = params['id']
        this.enrollmentService.fetchPackages(params['id']);
      }
      if (params['userId']) {
        this.userId = params['userId'];
      }
    })
  }
  selectedItem: any;

  listClick(event: any, newValue: any) {
    this.selectedItem = newValue;
  }
  submitEnroll() {
    if (this.selectedItem) {
      console.log(this.selectedItem)
      console.log(this.authService.userInfo.value!['sub'])
      this.enrollmentService.enroll(this.couresId,this.authService.userInfo.value!['sub'],this.selectedItem.id);
    } else {
      //error
    }
  }

}

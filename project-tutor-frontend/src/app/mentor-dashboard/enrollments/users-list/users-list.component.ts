import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentUsersService } from '../enrollment-users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    public enrollmentService: EnrollmentUsersService
  ) { }
  courseId ='';

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params['courseId']) {
        this.courseId = params['courseId']
        this.enrollmentService.fetchClients(params['courseId']);
      }
    })
  }

  selectedItem: any;

  listClick(event: any, newValue: any) {
    this.selectedItem = newValue;
  }
}

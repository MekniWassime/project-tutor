import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-schedular-list',
  templateUrl: './schedular-list.component.html',
  styleUrls: ['./schedular-list.component.css']
})
export class SchedularListComponent implements OnInit {

  constructor(    
    private activeRoute: ActivatedRoute,
    public sessionsService: SessionsService,
    private router: Router
  ) {}

  courseId ='';

  ngOnInit(): void {
    this.activeRoute.parent!.params.subscribe(params => {
      if (params['courseId']) {
        this.courseId = params['courseId']
        this.sessionsService.fetchSessions(params['courseId']);
      }
    })
  }

  selectedItem: any;

  listClick(event: any, newValue: any) {
    this.selectedItem = newValue;
  }

  createSchedular(){
    this.router.navigate(['/mentorDashboard/',this.courseId,'sessions','createSchedular']);
  }

}

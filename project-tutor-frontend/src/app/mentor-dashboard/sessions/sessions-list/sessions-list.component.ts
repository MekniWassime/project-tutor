import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {

  constructor(    
    private activeRoute: ActivatedRoute,
    public sessionsService: SessionsService
  ) {}

  courseId ='';

  ngOnInit(): void {
    this.activeRoute.parent!.params.subscribe(params => {
      console.log(params['courseId'])
      if (params['courseId']) {
        this.courseId = params['courseId']
        this.sessionsService.fetchSessions(params['courseId']);
      }
    });
  }

  selectedItem: any;

  listClick(event: any, newValue: any) {
    this.selectedItem = newValue;
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor( 
    private activeRoute: ActivatedRoute,
    public sessionsService: SessionsService,
    ) { }

    courseId:any;
  ngOnInit(): void {
    this.activeRoute.parent!.params.subscribe(params => {
      console.log(params['courseId'])
      if (params['courseId']) {
        this.courseId = params['courseId']
      }
    });
  }
  validateSession(form:NgForm){
    this.sessionsService.createSession(this.courseId,form.form.value);
  }

}

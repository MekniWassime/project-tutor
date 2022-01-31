import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DaysEnum } from '../models/days-of-week-enum';
import { SchedularFrequencyEnum } from '../models/frequency-schedular-enum';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-create-schedular',
  templateUrl: './create-schedular.component.html',
  styleUrls: ['./create-schedular.component.css']
})
export class CreateSchedularComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    public sessionsService: SessionsService,
  ) { 
  }

  courseId:any;
  frequencies = SchedularFrequencyEnum;
  days = DaysEnum
  
  ngOnInit(): void {
    this.activeRoute.parent!.params.subscribe(params => {
      console.log(params['courseId'])
      if (params['courseId']) {
        this.courseId = params['courseId']
      }
    });
    
  }
  validateSchedular(form:NgForm){
    this.sessionsService.createSchedular(this.courseId,form.form.value);
  }

}

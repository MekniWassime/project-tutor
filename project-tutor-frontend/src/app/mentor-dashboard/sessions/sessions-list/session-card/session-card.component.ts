import { Component, Input, OnInit } from '@angular/core';
import { SessionModel } from 'src/app/mentor-dashboard/sessions/models/session-model';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.css']
})
export class SessionCardComponent implements OnInit {
  @Input('session') session!: SessionModel;

  constructor() { }

  ngOnInit(): void {
  }

}

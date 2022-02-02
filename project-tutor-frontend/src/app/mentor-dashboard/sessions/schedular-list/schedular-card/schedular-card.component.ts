import { Component, Input, OnInit } from '@angular/core';
import { SchedularModel } from '../../models/schedular-model';

@Component({
  selector: 'app-schedular-card',
  templateUrl: './schedular-card.component.html',
  styleUrls: ['./schedular-card.component.css']
})
export class SchedularCardComponent implements OnInit {

  @Input('schedular') schedular!: SchedularModel;

  constructor() { }

  ngOnInit(): void {
  }

}

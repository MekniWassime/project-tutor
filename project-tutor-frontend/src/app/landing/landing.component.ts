import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
  focus: any;
  focus1: any;
  test : Date = new Date();
  ngOnInit(): void {
  }

}

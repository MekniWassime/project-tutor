import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  selectedItem='sessions'
  constructor() { }

  ngOnInit(): void {
  }
  selectItem(event: any, newValue: any) {
    this.selectedItem = newValue;
  }
}

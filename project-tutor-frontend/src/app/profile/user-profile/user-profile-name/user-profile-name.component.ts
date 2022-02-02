import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-name',
  templateUrl: './user-profile-name.component.html',
  styleUrls: ['./user-profile-name.component.css']
})
export class UserProfileNameComponent implements OnInit {

  @Input('name') name:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

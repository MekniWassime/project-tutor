import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-birthdate',
  templateUrl: './user-profile-birthdate.component.html',
  styleUrls: ['./user-profile-birthdate.component.css']
})
export class UserProfileBirthdateComponent implements OnInit {
  @Input('birthdate') birthdate  :Date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

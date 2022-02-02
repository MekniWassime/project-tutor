import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-phone',
  templateUrl: './user-profile-phone.component.html',
  styleUrls: ['./user-profile-phone.component.css']
})
export class UserProfilePhoneComponent implements OnInit {
  @Input('phone') phone:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}

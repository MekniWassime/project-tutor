import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-email',
  templateUrl: './user-profile-email.component.html',
  styleUrls: ['./user-profile-email.component.css']
})
export class UserProfileEmailComponent implements OnInit {
  @Input('email') email : string="";
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-image',
  templateUrl: './user-profile-image.component.html',
  styleUrls: ['./user-profile-image.component.css']
})
export class UserProfileImageComponent implements OnInit {

  @Input('image') image:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

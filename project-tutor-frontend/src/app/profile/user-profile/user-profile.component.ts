import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/courses/models/mentor';
import { User } from 'src/app/courses/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User | undefined;
  mentor: Mentor | undefined;
  constructor() { }


  async loadUser(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.user = new User( 1,"foulena ben foulen", "name.fgahe@gmail.com",new Date(1999,1,14,0,0,0,0),98765432,'/assets/img/joe-gardner-2.jpg','passwordii',[]);
  }
  async loadMentor(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.mentor = new Mentor( 1,"foulena ben foulen", "name.fgahe@gmail.com",new Date("14-01-1999"),98765432,'/assets/img/joe-gardner-2.jpg','passwordii','tutor');
  }

  ngOnInit(): void {
    this.loadUser()
  }

}

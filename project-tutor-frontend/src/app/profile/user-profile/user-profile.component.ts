import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Mentor } from 'src/app/courses/models/mentor';
import { User } from 'src/app/courses/models/User';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user : Mentor = new Mentor( 1,"foulena ben foulen1", "name.fgahe@gmail.com",new Date("14-01-1999"),98765432,'/assets/img/joe-gardner-2.jpg','passwordii', 'tutor');
  mentor: Mentor | undefined;
  constructor(private authService:AuthService, private profileService:ProfileService) { }


  // async loadUser(): Promise<void> {
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   this.user = new User( 1,"foulena ben foulen", "name.fgahe@gmail.com",new Date(1999,1,14,0,0,0,0),98765432,'/assets/img/joe-gardner-2.jpg','passwordii',[]);
  // }
  // async loadMentor(): Promise<void> {
  //   const mentor = await this.profileService.fetchMentor(9);
  //   // console.log('information');
  //   console.log(mentor);
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   this.user = new Mentor( 1,"foulena ben foulen1", "name.fgahe@gmail.com",new Date("14-01-1999"),98765432,'/assets/img/joe-gardner-2.jpg','passwordii', 'tutor');
  // } 

  ngOnInit(): void {
    const sub = this.authService.userInfo.value!['sub'];
    this.profileService.fetchMentor(sub);
  }

}

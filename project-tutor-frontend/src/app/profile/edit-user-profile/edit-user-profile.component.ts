import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mentor } from 'src/app/courses/models/mentor';
import { User } from 'src/app/courses/models/User';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  user: User | undefined;
  mentor: Mentor | undefined;
  onSubmit(formulaire: NgForm){
    console.log(formulaire.value);
    // console.log(formulaire.value['birthdate']);
  }

  afuConfig = {

    //multiple: false,
    formatsAllowed: ".jpg,.png",
    //maxSize: "1",
    uploadAPI:  {
      url:"https://example-file-upload-api",
     // method:"POST",
     // headers: {
    // "Content-Type" : "text/plain;charset=UTF-8",
    // "Authorization" : `Bearer ${token}`
     // },
     // params: {
      //  'page': '1'
     // },
     // responseType: 'blob',
     // withCredentials: false,
    },
    hideResetBtn: true,

};

  onFileSelected(event: any){
    // console.log(event);
  }

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

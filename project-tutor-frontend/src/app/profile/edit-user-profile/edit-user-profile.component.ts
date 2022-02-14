import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mentor } from 'src/app/courses/models/mentor';
import { User } from 'src/app/courses/models/User';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  user: User | undefined;
  mentor: Mentor | undefined;
  file: File | undefined;
  async onSubmit(formulaire: NgForm){
    console.log(formulaire.value);
    // console.log(formulaire.value['birthdate']);
    let formData = new FormData();
    formData.append('photo', this.file!, this.file!.name);

    try {
      const response = await fetch('http://localhost:3000/auth/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  } 
  afuConfig = {

    //multiple: false,
    formatsAllowed: ".jpg,.png",
    //maxSize: "1",
    uploadAPI:  {
      url:"http://localhost:3000/auth/upload",
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

  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<any>(`http://localhost:3000/auth/upload`, { formData });
  }

  onFileChange(fileChangeEvent: { target: { files: any[]; }; }) {
    this.file = fileChangeEvent.target.files[0];
    
  }

  onFileSelected(event: any){
    // console.log(event);
  }

  constructor(private http:HttpClient) { }

  async loadUser(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.user = new User( 1,"foulena ben foulen", "name.fgahe@gmail.com",new Date(1999,1,14,0,0,0,0),98765432,'/assets/img/joe-gardner-2.jpg','passwordii',[]);
  }
  async loadMentor(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.mentor = new Mentor( 9,"foulena ben foulen", "name.fgahe@gmail.com",new Date("14-01-1999"),98765432,'/assets/img/joe-gardner-2.jpg','passwordii','tutor');
  }

  ngOnInit(): void {
    this.loadUser()
  }
}

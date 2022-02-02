import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mentor } from 'src/app/courses/models/mentor';
import { User } from 'src/app/courses/models/User';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  test : Date = new Date();
  focus: any;
  focus1 : any;
  user: User = new User(1,'','',new Date(),0,'','',[]);;
  mentor: Mentor | undefined;
  async loadUser(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.user= new User(1,'','',new Date(),0,'','',[]);
  }
  constructor() { }

  onSubmit(registerFormulaire: NgForm){
    console.log(registerFormulaire.value);
    console.log(registerFormulaire.value['password']);
  }
  ngOnInit(): void {
    this.loadUser();
  }

}

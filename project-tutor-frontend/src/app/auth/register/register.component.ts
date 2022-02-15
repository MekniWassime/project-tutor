import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Mentor } from 'src/app/courses/models/mentor';
import { User } from 'src/app/courses/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  test : Date = new Date();
  focus: any;
  focus1 : any;
  user: User = new User(1,'','',new Date(),0,'','',[]);
  mentor: Mentor | undefined;
  passwordToString:string='';
  repeatedpasswordToString:string='';

  areEqual(password:NgModel, repeatedpassword:NgModel){
    this.passwordToString = password.toString();
    // console.log(this.passwordToString);

    this.repeatedpasswordToString=repeatedpassword.toString();
    // console.log(this.repeatedpasswordToString);
    // console.log(this.passwordToString.localeCompare(this.repeatedpasswordToString));
    return(this.passwordToString===this.repeatedpasswordToString)
  }

  async loadUser(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.user= new User(1,'','',new Date(),0,'','',[]);
  }

  onSubmit(registerFormulaire: NgForm){
    console.log(registerFormulaire.value);
    console.log(registerFormulaire.value['password']);
  }
  constructor() { }

  ngOnInit(): void {
    this.loadUser();
  }

}

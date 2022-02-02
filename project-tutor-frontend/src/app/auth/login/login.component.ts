import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mentor } from 'src/app/courses/models/mentor';
import { User } from 'src/app/courses/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test : Date = new Date();
  focus: any;
  focus1 : any;
  user: User = new User(1,'','',new Date(),0,'','',[]);;
  mentor: Mentor | undefined;
  onSubmit(formulaire: NgForm){
    console.log(formulaire.value);
    console.log(formulaire.value['email']);
  }
  async loadUser(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.user= new User(1,'','',new Date(),0,'','',[]);
  }
  constructor() { }

  ngOnInit(): void {
    this.loadUser()
  }

}

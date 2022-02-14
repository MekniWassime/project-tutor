import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
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
    formulaire.value['role'] = "mentor";
    this.authService.userLogin(formulaire.value)
    .subscribe(
    (value) => {
     if(value){
      //routing
      this.router.navigate(["/user/profile/show"])
     }else{
      alert('failed');
     }
     },
    (error)=>{
    alert('failed error');
     }
    );
  }
  async loadUser(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.user= new User(1,'','',new Date(),0,'','',[]);
  }
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loadUser()
  }

}

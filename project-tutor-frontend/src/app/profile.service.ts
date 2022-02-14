import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mentor } from './courses/models/mentor';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private mentorSubject = new BehaviorSubject<Mentor | undefined>(undefined);
  public mentor = this.mentorSubject.asObservable();

  constructor(private httpClient:HttpClient) { }
  
  public async fetchMentor(id:number){
    this.httpClient.get<Mentor>(`http://localhost:3000/auth/credentials/${id}`).subscribe((mentorUser)=>{
      this.mentorSubject.next(mentorUser);
      
    })
  } 

  public async fetchUser(id:number){
    this.httpClient.get<Mentor>(`http://localhost:3000/simple-user/profile/${id}`).subscribe((simpleUser)=>{
      this.mentorSubject.next(simpleUser);
      console.log("ezaeezaea");
      console.log(simpleUser);
    })
  } 

}
 
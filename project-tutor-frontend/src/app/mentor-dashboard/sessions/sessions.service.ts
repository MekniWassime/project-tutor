import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SchedularModel } from './models/schedular-model';
import { SessionModel } from './models/session-model';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private sessionsSubject = new BehaviorSubject<SessionModel[] | undefined>(undefined);
  public sessions = this.sessionsSubject.asObservable();

  private schedularSubject = new BehaviorSubject<SchedularModel[] | undefined>(undefined);
  public schedulars = this.schedularSubject.asObservable();

  
  constructor(private httpClient:HttpClient,
    private router: Router
    ) {}
  
  public async fetchSessions(id:number){
    this.httpClient.get<SessionModel[]>(`http://localhost:3000/session/findByCourse/${id}`).subscribe((sessions)=>{
      this.sessionsSubject.next(sessions);
    })
  }
  public async fetchSchedulars(id:number){
    this.httpClient.get<SchedularModel[]>(`http://localhost:3000/session/schedular/findByCourse/${id}`).subscribe((schedulars)=>{
      this.schedularSubject.next(schedulars);
    })
  }
}

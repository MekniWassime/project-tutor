import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EnrollmentModel } from '../models/enrollment-model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentUsersService {  
  private enrollmentsSubject = new BehaviorSubject<EnrollmentModel[] | undefined>(undefined);
  public enrollments = this.enrollmentsSubject.asObservable();

  
  constructor(private httpClient:HttpClient,
    private router: Router
    ) {}
  
  public async fetchClients(id:number){
    this.httpClient.get<EnrollmentModel[]>(`http://localhost:3000/enrollment/clients/${id}`).subscribe((enrollments)=>{
      this.enrollmentsSubject.next(enrollments);
    })
  }

}

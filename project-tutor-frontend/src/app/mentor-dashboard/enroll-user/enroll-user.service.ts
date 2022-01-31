import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PackageModel } from '../models/package-model';

@Injectable({
  providedIn: 'root'
})
export class EnrollUserService {
  private packagesSubject = new BehaviorSubject<PackageModel[] | undefined>(undefined);
  public packages = this.packagesSubject.asObservable();

  
  constructor(private httpClient:HttpClient,
    private router: Router
    ) {}
  
  public async fetchPackages(id:number){
    this.httpClient.get<PackageModel[]>(`http://localhost:3000/package/findByCourse/${id}`).subscribe((packages)=>{
      this.packagesSubject.next(packages);
    })
  }

  public async enroll(courseId: any,userId: any,packageId: any){
    let data = {
      'courseId': courseId,
      'userId':userId,
      'packageId':packageId
    }
    this.httpClient.post(`http://localhost:3000/enrollment/enroll`,data).subscribe((rep)=>{
      this.router.navigate(['/mentorDashboard/',courseId,'/enrollments'])
    });
  }
}

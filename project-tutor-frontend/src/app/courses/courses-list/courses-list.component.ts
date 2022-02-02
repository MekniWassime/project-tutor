import { CoursesStoreService } from './../courses-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor(public coursesStore: CoursesStoreService) { }

  ngOnInit(): void {
    
  }

}

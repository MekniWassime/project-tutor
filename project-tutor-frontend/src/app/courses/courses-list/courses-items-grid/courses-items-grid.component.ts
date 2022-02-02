import { CoursesStoreService } from './../../courses-store.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-courses-items-grid',
  templateUrl: './courses-items-grid.component.html',
  styleUrls: ['./courses-items-grid.component.css']
})
export class CoursesItemsGridComponent implements OnInit{
  constructor(public coursesStore :CoursesStoreService){}

  ngOnInit(): void {
  }

}

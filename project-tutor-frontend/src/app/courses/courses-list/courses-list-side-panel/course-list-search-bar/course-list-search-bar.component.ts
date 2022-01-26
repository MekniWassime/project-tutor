import { SearchPanelService } from './../search-panel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list-search-bar',
  templateUrl: './course-list-search-bar.component.html',
  styleUrls: ['./course-list-search-bar.component.css']
})
export class CourseListSearchBarComponent implements OnInit {

  constructor(private searchService:SearchPanelService) { }

  public onSearchChange(event: any){
    this.searchService.setSearchTerm(event.target.value);
  }

  ngOnInit(): void {
  }

}

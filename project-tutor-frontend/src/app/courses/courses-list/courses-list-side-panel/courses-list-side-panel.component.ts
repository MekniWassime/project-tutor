import { SearchPanelService } from './search-panel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list-side-panel',
  templateUrl: './courses-list-side-panel.component.html',
  styleUrls: ['./courses-list-side-panel.component.css'],
  providers: [SearchPanelService]
})
export class CoursesListSidePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

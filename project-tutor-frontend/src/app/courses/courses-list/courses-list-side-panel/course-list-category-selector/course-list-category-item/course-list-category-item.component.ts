import { CourseCategory} from './../../../../models/course-category';
import { Component, OnInit, Input} from '@angular/core';
import { SearchPanelService } from '../../search-panel.service';

@Component({
  selector: 'app-course-list-category-item',
  templateUrl: './course-list-category-item.component.html',
  styleUrls: ['./course-list-category-item.component.css']
})
export class CourseListCategoryItemComponent implements OnInit{
  @Input('category') category!:CourseCategory;

  constructor(public searchService:SearchPanelService) { }

  toggleCheckbox(event: any) {
    console.log(event.target);
    if ( event.target.checked )
      this.searchService.includeCategory(this.category);
    else
      this.searchService.excludeCategory(this.category);
  }

  ngOnInit(): void {
  }

}

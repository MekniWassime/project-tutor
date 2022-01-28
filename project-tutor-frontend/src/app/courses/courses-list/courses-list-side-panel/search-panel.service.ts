import { CourseCategory } from './../../models/course-category';
import { CoursesStoreService } from './../../courses-store.service';
import { Injectable } from '@angular/core';

const SEARCH_COOLDOWN = 750;
const POOLING_PERIOD = 250;

@Injectable()
export class SearchPanelService {
  private searchTerm: string = '';
  private excludedCategories: CourseCategory[] = [];
  private searchCooldown: number | undefined;

  constructor(private coursesStore: CoursesStoreService) { }

  public setSearchTerm(searchTerm: string){
    this.searchTerm = searchTerm;
    if(this.searchCooldown == null)
      this.searchOnCooldownEnd();
    else
      this.searchCooldown = SEARCH_COOLDOWN;
  }

  private async searchOnCooldownEnd(){
    this.searchCooldown = SEARCH_COOLDOWN;
    while(this.searchCooldown>0){
      await new Promise(resolve => setTimeout(resolve, POOLING_PERIOD));
      this.searchCooldown -= POOLING_PERIOD;
    }
    this.searchCooldown = undefined;
    this.search()
  }

  public excludeCategory(category: CourseCategory) {
    if (!this.excludedCategories.includes(category)) {
      this.excludedCategories.push(category);
      this.search();
    }
  }

  public includeCategory(category: CourseCategory) {
    var index = this.excludedCategories.indexOf(category);
    if (index != -1) {
      this.excludedCategories.splice(index, 1);
      this.search();
    }
  }

  public search() {
    this.coursesStore.fetchCourses({'searchTerm': this.searchTerm, 'excludedCategories': this.excludedCategories});
  }
}
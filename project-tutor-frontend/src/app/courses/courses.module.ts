import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ReviewFormComponent } from './course-details/review-form/review-form.component';
import { ReviewsPreviewComponent } from './course-details/reviews-preview/reviews-preview.component';
import { CourseInformationsComponent } from './course-details/course-informations/course-informations.component';
import { CourseInformationItemComponent } from './course-details/course-informations/course-information-item/course-information-item.component';
import { ReviewsSummeryComponent } from './course-details/reviews-summery/reviews-summery.component';
import { CoverImageComponent } from './course-details/cover-image/cover-image.component';
import { CourseDescriptionComponent } from './course-details/course-description/course-description.component';
import { AdressMapPreviewComponent } from './course-details/adress-map-preview/adress-map-preview.component';
import { CourseTitleComponent } from './course-details/course-title/course-title.component';
import { ReviewItemComponent } from './course-details/reviews-preview/review-item/review-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemsGridComponent } from './courses-list/courses-items-grid/courses-items-grid.component';
import { CourseItemPreviewComponent } from './courses-list/courses-items-grid/course-item-preview/course-item-preview.component';
import { CoursesListSidePanelComponent } from './courses-list/courses-list-side-panel/courses-list-side-panel.component';
import { CourseListSearchBarComponent } from './courses-list/courses-list-side-panel/course-list-search-bar/course-list-search-bar.component';
import { CourseListCategorySelectorComponent } from './courses-list/courses-list-side-panel/course-list-category-selector/course-list-category-selector.component';
import { CourseListCategoryItemComponent } from './courses-list/courses-list-side-panel/course-list-category-selector/course-list-category-item/course-list-category-item.component';
import { CourseCategoryPipe } from './pipes/course-category.pipe';



@NgModule({
  declarations: [
    CourseDetailsComponent,
    ReviewFormComponent,
    ReviewsPreviewComponent,
    CourseInformationsComponent,
    CourseInformationItemComponent,
    ReviewsSummeryComponent,
    CoverImageComponent,
    CourseDescriptionComponent,
    AdressMapPreviewComponent,
    CourseTitleComponent,
    ReviewItemComponent,
    StarRatingComponent,
    CoursesListComponent,
    CoursesItemsGridComponent,
    CourseItemPreviewComponent,
    CoursesListSidePanelComponent,
    CourseListSearchBarComponent,
    CourseListCategorySelectorComponent,
    CourseListCategoryItemComponent,
    CourseCategoryPipe,
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class CoursesModule { }

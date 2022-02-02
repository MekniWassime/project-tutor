import { CourseCategory, CourseCategoryUtility } from './../models/course-category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseCategory'
})
export class CourseCategoryPipe implements PipeTransform {

  transform(category: CourseCategory): string {
    return CourseCategoryUtility.humanReadable(category);
  }

}

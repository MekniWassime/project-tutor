export enum CourseCategory {
    Sport = 'Sport',
    Etude = 'Etude',
    Art = 'Art',
  }

export class CourseCategoryUtility {
    static categories = [CourseCategory.Sport, CourseCategory.Etude, CourseCategory.Art];

    static humanReadable(category: CourseCategory): string {
        switch (category) {
            case CourseCategory.Sport:
                return "Sport"
            case CourseCategory.Etude:
                return "Etude"
            case CourseCategory.Art:
                return "Art"
            default:
                throw new Error(`value error, check you enums ${category}`);
        }
    }
}
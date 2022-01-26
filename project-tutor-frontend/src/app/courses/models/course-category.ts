export enum CourseCategory {
    Category1,
    Category2,
    Category3
}

export class CourseCategoryUtility {
    static categories = [CourseCategory.Category1, CourseCategory.Category2, CourseCategory.Category3];

    static humanReadable(category: CourseCategory): string {
        switch (category) {
            case CourseCategory.Category1:
                return "first category"
            case CourseCategory.Category2:
                return "second category"
            case CourseCategory.Category3:
                return "third category"
            default:
                throw new Error(`value error, check you enums ${category}`);
        }
    }
}
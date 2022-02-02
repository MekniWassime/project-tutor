import { UserModel } from "./user-model";

export class EnrollmentModel {
    constructor(
        public id:number,
        public user: UserModel,
        public nbSessionsPayed: number,
        public nbSessionsAttended: number,
        public lastPackage: string
    ) {
    }
}
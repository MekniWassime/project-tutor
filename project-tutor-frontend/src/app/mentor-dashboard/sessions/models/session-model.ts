export class SessionModel {
    constructor(
        public id:number,
        public date: Date,
        public duration: number,
        public attendance: number
    ) {
    }
}
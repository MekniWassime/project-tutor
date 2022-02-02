export class PackageModel {
    constructor(
        public id:number,
        public title: string,
        public price: number,
        public nbSessions: number
    ) {
    }
}
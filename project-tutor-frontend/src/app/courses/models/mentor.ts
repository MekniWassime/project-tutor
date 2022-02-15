export class Mentor  {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthdate: Date,
        public phone: number,
        public image: string,
        public password?: string,
        public occupation? : string,
        public repeatedPassword? : string,
    ) { }
}

export class Mentor {
    constructor(
        public name: string,
        public email: string
    ) { }

    static fromJson(json: any) {
        return new this(
            json['name'],
            json['email']
        );
    }
}
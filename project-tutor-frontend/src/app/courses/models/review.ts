export class Review{
    constructor(
        public rating:number,
        public feedback:string,
        public userName:string,
        public userId:number,
    ){}

    static fromJson(json:any):Review{
        return new this(
            json['rating'],
            json['feedback'],
            json['userName'],
            json['userId']
        );
    }
}
export class PaymentInfo {
    constructor(
        public title: string,
        public price: number,
        public numberOfSessions: number
    ) {
        this.sessionPrice = price / numberOfSessions;
    }

    public sessionPrice: number;

    static fromJson(json: any): PaymentInfo {
        return new this(
            json['title'],
            json['price'],
            json['numberOfSessions']
        )
    }
}
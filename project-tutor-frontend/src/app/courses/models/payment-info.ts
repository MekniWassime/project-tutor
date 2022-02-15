export class PaymentInfo {
    constructor(
        public title: string,
        public price: number,
        public nbSessions: number
    ) {
        this.sessionPrice = price / nbSessions;
    }

    public sessionPrice: number;
}
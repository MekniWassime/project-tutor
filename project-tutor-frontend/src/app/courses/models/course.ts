import { CourseCategory } from './course-category';
import { Mentor } from './mentor';
import { PaymentInfo } from './payment-info';
export class Course {

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public category: CourseCategory,
        public capacity: number,
        public adress: string,
        public mentor: Mentor,
        public paymentInfoList: PaymentInfo[],
        public image: string,
        public averageRating: number,
        ) {
            if(this.paymentInfoList.length!=0){
                this.bestOffer = paymentInfoList[0];
                this.paymentInfoList.forEach((paymentInfo)=>{
                    if(this.bestOffer!.sessionPrice>paymentInfo.sessionPrice)
                        this.bestOffer = paymentInfo;
                });
            }
        }
    
    public bestOffer: PaymentInfo | undefined;

    static fromJson(json: any): Course{
        const mentor = Mentor.fromJson(json['mentor']);
        const paymentInfo = (json['paymentInfo'] as any[]).map((element)=> PaymentInfo.fromJson(element));
        return new this(
            json['id'],
            json['title'],
            json['desctiption'],
            json['category'],
            json['capacity'],
            json['adress'],
            mentor,
            paymentInfo,
            json['image'],
            json['averageRating']
        );
    }
}
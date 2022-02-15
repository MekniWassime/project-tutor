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
        public packages: PaymentInfo[],
        public image: string,
        public averageRating: number,
        ) {
            image = "https://preview.colorlib.com/theme/edusmart/img/courses/xcourse-details.jpg.pagespeed.ic.F6AtKAlLP7.webp"
            if(this.packages.length!=0){
                this.bestOffer = packages[0];
                this.packages.forEach((paymentInfo)=>{
                    if(this.bestOffer!.sessionPrice>paymentInfo.sessionPrice)
                        this.bestOffer = paymentInfo;
                });
            }
        }
    
    public bestOffer: PaymentInfo | undefined;
}
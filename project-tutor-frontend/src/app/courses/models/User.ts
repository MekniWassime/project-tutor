import { Review } from "./review";
export class User {
  constructor(
      public id: number,
      public name: string,
      public email: string,
      public birthdate: Date,
      public phone: number,
      public image: string,
      public password: string,
      public reviews: Review[],
      public repeatedPassword? : string,
      public role?: string,
  ) { }
}

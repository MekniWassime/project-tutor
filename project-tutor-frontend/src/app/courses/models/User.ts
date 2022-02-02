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

  static fromJson(json: any) {
      return new this(
          json['id'],
          json['name'],
          json['email'],
          json['birthdate'],
          json['phone'],
          json['image'],
          json['password'],
          json['reviews']
      );
  }
}

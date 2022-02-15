
export class ContactForm {
  constructor(
      public name: string,
      public email: string,
      public message: string,
  ) { }

  static fromJson(json: any) {
      return new this(
          json['name'],
          json['email'],
          json['message']
      );
  }
}

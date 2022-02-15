
export class VerifyTokenForm {
  constructor(
      public token: string,

  ) { }

  static fromJson(json: any) {
      return new this(
          json['token'],

      );
  }
}

/// Payment types ///

interface CreditCardPayment {
  name: string;
  billingAddress: string[];
  cardNumber: string;
  expiry: Date;
  cvv: number;
}

interface DebitCardPayment {
  name: string;
  cardNumber: string;
  expiry: Date;
  cvv: number;
}

interface NetBankingPayment {
  name: string;
  accountNumber: string;
  ifscCode: string;
}

interface PayTMPayment {
  mobileNumber: string;
  custId: string;
  email: string;
}

type PaymentType =
  | CreditCardPayment
  | DebitCardPayment
  | NetBankingPayment
  | PayTMPayment;

/// Blood type ///
export interface IsNegative {
  negative: boolean;
}

export class GroupA implements IsNegative {
  negative: boolean;
}

export class GroupB implements IsNegative {
  negative: boolean;
}

export class GroupAB implements IsNegative {
  negative: boolean;
}

export class GroupO implements IsNegative {
  negative: boolean;
}

export type BloodGroup = GroupA | GroupB | GroupO | GroupAB;

/// Extension is implicit union ///

class Point {
  x: number;
  y: number;
}

class Shape {
  draw() {}
}

class Circle extends Shape {
  radius: number;
  center: Point;

  draw() {
    console.log(
      `Drawing a Circle with radius: ${this.radius} @ ${this.center}`,
    );
  }
}

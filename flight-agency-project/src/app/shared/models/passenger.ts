import { Transaction } from './transaction';
export interface Passenger {
  id: number;
  fullName: string;
  identifierCard: string;
  email: string;
  phoneNumber: string;
  gender: string;
  transactions?: Transaction[]
}

export interface PassengerInfoDTO {
  fullName: string;
  identifierCard: string;
  email: string;
  phoneNumber: string;
  gender: string;
  baggagePrice: number;
}

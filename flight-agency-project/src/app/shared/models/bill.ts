import { Transaction } from './transaction';

export interface Bill {
    id: number ;
    dateCreated: string;
    billCode: string;
    taxCode: string;
    transaction: Transaction;
}
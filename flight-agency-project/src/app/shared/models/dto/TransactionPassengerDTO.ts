import { TransactionDTO } from './TransactionDTO';
import { PassengerDTO } from './PassengerDTO';
//BHung
export interface TransactionPassengerDTO{
    passengers : PassengerDTO[];
    transactions: TransactionDTO[]
}
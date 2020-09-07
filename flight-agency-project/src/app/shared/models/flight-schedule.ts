import { Airport } from './airport';
import { Branch } from './branch';
import { Transaction } from './transaction';

export interface FlightSchedule{
    id: number,
    departureAirport: Airport
    departureDateTime: string,
    arrivalAirport: Airport,
    arrivalDateTime: string,
    branch: number,
    flightCode: string,
    flightCapacity: number,
    price: number,
    // transactions: Transaction[]
}
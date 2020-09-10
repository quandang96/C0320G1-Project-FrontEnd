import { FlightSchedule } from './flight-schedule';
import { Passenger, PassengerInfoDTO } from './passenger';
export interface Transaction {
    id: number;
    createdTime: string;
    dueTime: string;
    price: number;
    status: string;
    account: Account;
    flightSchedule: FlightSchedule;
    passengers: Passenger[];
}
export interface BookingDTO {
    depFlightId: number;
    retFlightId: number;
    accountId: number;
    depTotalPrice: number;
    retTotalPrice: number;
    depPassengers: Array<PassengerInfoDTO>;
    retPassengers: Array<PassengerInfoDTO>;
}
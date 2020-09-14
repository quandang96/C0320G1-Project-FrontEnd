import { PassengerInfoDTO, Passenger } from './passenger';
import { FlightSchedule } from './flight-schedule';
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
    accountId: number;
    depFlightId: number;
    retFlightId: number;
    depTotalPrice: number;
    retTotalPrice: number;
    depBranch: string;
    retBranch: string;
    depPassengers: Array<PassengerInfoDTO>;
    retPassengers: Array<PassengerInfoDTO>;
}
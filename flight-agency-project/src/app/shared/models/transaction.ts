import {FlightSchedule} from './flight-schedule';
import {Passenger} from './passenger';

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

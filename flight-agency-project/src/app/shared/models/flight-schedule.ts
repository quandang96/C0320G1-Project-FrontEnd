import { Airport } from './airport';
import { Branch } from './branch';

export interface FlightSchedule {
  id: number;
  departureAirport: Airport;
  departureDateTime: string;
  arrivalAirport: Airport;
  arrivalDateTime: string;
  branch: Branch;
  flightCode: string;
  flightCapacity: number;
  price: number;
  status: boolean
  // transactions?: Transaction[]
}

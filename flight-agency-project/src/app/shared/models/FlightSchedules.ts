// D-Bach
import { Branches } from './Branches';
import { Airports } from './Airports';
export interface FlightSchedules {
  id: number;
  arrivalDateTime: string;
  departureDateTime: string;
  flightCapacity: number;
  flightCode: string;
  price: number;
  status: string;
  arrivalAirport: Airports;
  brand: Branches;
  departureAirport: Airports;
}

export interface Transaction {
  id: number;
  // flightSchedule: FlightSchedule;
  // passengers: Passenger[];
  account: Account;
  price: number;
  createdTime: string;
  dueTime: string;
  status: string;
}

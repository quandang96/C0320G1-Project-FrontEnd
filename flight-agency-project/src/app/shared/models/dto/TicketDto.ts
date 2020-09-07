export interface TicketDto {
  id: number;
  depature: string;
  destination: string;
  depatureTime: Date;
  bookingCode: string;
  airline: string;
  typeTicket: string;
  chair: string;
  price: number;
  taxesAndFees: number;
  typeCustomer: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  extraLuggage: string;
}

export interface Promo {
  [prop: string]: any;

  id: number;
  namePromo: string;
  discount: number;
  airline: string;
  departurePlace: string;
  arrivalPlace: string;
  promoDateStart: string;
  promoDateEnd: string;
  flightDepartureDateStart: string;
  flightDepartureDateEnd: string;
  isDelete: boolean;
}

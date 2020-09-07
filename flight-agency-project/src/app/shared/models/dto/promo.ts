export interface Promo{
    [prop: string]: any;

    id: number;
    namePromo: string;
    discount: number;
    // flightSchedule: FlightSchedule;
    promoDateStart: string;
    promoDateEnd: string;
    flightDepartureDateStart: string;
    flightDepartureDateEnd: string;
    isDelete: boolean;
}
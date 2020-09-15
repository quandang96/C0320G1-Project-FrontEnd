import { Airport } from './airport';
import { Branch } from './branch';

export interface Promo{
    [prop: string]: any;

    id: number;
    namePromo: string;
    discount: number;
    airline: Branch;
    departurePlace: Airport;
    arrivalPlace: Airport;
    promoDateStart: String;
    promoDateEnd: String;
    flightDepartureDateStart: String;
    flightDepartureDateEnd: String;
    isDelete: boolean;
}
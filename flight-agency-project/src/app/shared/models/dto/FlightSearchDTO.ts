import { Airport } from '../airport';

//BHung
export interface FlightSearchDTO {
    departurePlace: Airport;
    departureDate: string;
    arrivalDate: string;
    arrivalPlace?: Airport;
    adult: number;
    child: number;
    baby: number;
}
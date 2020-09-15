import DateTimeFormat = Intl.DateTimeFormat;
export interface PromoUpdateDto {
    'id': number;
    'promoName': string;
    'discount': number;
    'airline': string;
    'departurePlace': string;
    'arrivalPlace': string;
    'flightDepartureDateStart': DateTimeFormat;
    'flightDepartureDateEnd': DateTimeFormat ;
    'promoDateStart': DateTimeFormat ;
    'promoDateEnd': DateTimeFormat ;
  }
  
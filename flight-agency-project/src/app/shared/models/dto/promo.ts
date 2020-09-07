export interface Promo{
    [prop: string]: any;

    id: number;
    namePromo: string;
    discount: number;
    dateRunPromoStart: string;
    dateRunPromoEnd: string;
    flightDepartureTimeStart: string;
    flightDepartureTimeEnd: string;
    //customerRanking: CustomerRanking;
    //airlineCompanyList: AirlineCompanyList;
    //serviceClass: ServiceClass;
    //airlineRouter: AirlineRouter;
    isDelete: boolean;
}
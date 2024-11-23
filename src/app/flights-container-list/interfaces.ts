export interface IResponse {
    origin?: string;
    destination?: string;
    journeys?: IJourney[];
}

export interface IJourney {
    id?: string;
    origin?: string;
    destination?: string;
    price?: number;
    flights?: IFlight[];
    totalPrice?: number;
}

export interface IFlight {
    id?: string;
    origin?: string;
    destination?: string;
    price?: number;
    transport: ITransport;
}

export interface ITransport {
    id?: string;
    flightCarrier?: string;
    flightNumber?: string;
}

export interface ISearchData {
    origin?: string;
    destination?: string;
    tripType?: string;
    currency?: string;
}
export interface ICurrency {
    name: string;
    code: string
}
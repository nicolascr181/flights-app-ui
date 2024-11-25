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
    totalPrice: number;
    currency: string;
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
    origin?: { name: string, code: string };
    destination?: { name: string, code: string };
    tripType?: string;
    currencyType?: string;
}
export interface ICurrency {
    name: string;
    code: string
}

export interface ICurrencyDetails {
    symbol: string;
    name: string;
    code: string;
    decimalDigits: number;
    rounding: number;
}

export interface ICurrencyResponse {
    [currencyCode: string]: ICurrencyDetails;
}

export interface IAirportResponse {
    icao?: string;
    iata?: string;
    name?: string;
    city?: string;
    region?: string;
    country?: string;
    elevation_ft?: string;
    latitude?: string;
    longitude?: string;
    timezone?: string;
}
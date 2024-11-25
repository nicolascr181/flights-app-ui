import { IFlight } from "./IFlights";


export interface IJourney {
    id?: string;
    origin?: string;
    destination?: string;
    price?: number;
    flights?: IFlight[];
    totalPrice: number;
    currency: string;
}
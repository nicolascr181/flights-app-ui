import { ITransport } from "./ITransport";

export interface IFlight {
    id?: string;
    origin?: string;
    destination?: string;
    price?: number;
    transport: ITransport;
}
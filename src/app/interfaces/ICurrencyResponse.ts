import { ICurrencyDetails } from "./ICurrencyDetails";

export interface ICurrencyResponse {
    [currencyCode: string]: ICurrencyDetails;
}

import { IJourney } from "./IJourney";

export interface IResponse {
    origin?: string;
    destination?: string;
    journeys?: IJourney[];
}
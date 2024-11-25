import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

@Injectable()
export class JourneyService {
    constructor(private http: HttpClient) { }

    /**
     * Get all journeys given an origin and destination
     * oneway and roundtrip
     * @param body 
     * @returns 
     */
    getJourneyList(body: object) {
        return this.http.post<IResponse[]>(`${environment.pathFlightsAPI}v1/journey`, body);
    }
};
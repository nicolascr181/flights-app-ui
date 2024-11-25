import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurrencyResponse, IResponse } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  /**
   * Get all currencies available from server
   * @param body 
   * @returns 
   */
  getCurrencyList() {
    return this.http.get<ICurrencyResponse>(`${environment.pathFlightsAPI}v1/currency`);
  }
}

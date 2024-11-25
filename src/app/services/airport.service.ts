import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IAirportResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  /**
   * Get airports from city
   * @param body 
   * @returns 
   */
  getAirports(city: string) {
    const headers = new HttpHeaders({
      'X-Api-Key': environment.ninjaAPIKEY // Replace with your actual API key
    });

    const params = new HttpParams().set('city', city);
    return this.http.get<IAirportResponse[]>(`${environment.pathAirports}`, { headers, params });
  }
}

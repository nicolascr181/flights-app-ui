import { AirportService } from '../services/airport.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from '../services/currency.service';
import { cities } from '../constants/cities.constant';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PrimeNGImports } from '../primeng-imports';
import { TripType } from './enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { SearchState } from '../store/search.reducer';
import { updateSearch } from '../store/search.actions';


@Component({
  selector: 'app-flights-search',
  standalone: true,
  imports: [CommonModule, PrimeNGImports, ReactiveFormsModule],
  templateUrl: './flights-search.component.html',
  styleUrl: './flights-search.component.scss',
  providers: [CurrencyService, AirportService]
})
export class FlightsSearchComponent implements OnInit {

  public form: FormGroup;
  public currencies: { name: string; code: string; symbol: string }[] = [];
  public tripTypes: TripType[] = Object.values(TripType);
  public loadingButton = false;
  public disableButton = true;
  public loadingCombo = true;
  public filteredCities: any[] = [];
  private destroyRef = inject(DestroyRef);
  private cities: { name: string, code?: string }[];



  constructor(private fb: FormBuilder,
    private currencyService: CurrencyService,
    private airportService: AirportService,
    private messageService: MessageService,
    private store: Store<SearchState>) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      tripType: [TripType.Oneway, Validators.required],
      currencyType: ['USD', Validators.required],
    });
    this.cities = cities;
  }
  ngOnInit(): void {
    this.getAllCurrencies();

  }

  /**
  * Set iata code on selecting city
  * @param $event 
  * @param type 
  */
  public onSelect($event: any, type: string) {
    this.loadingButton = true;
    const city = $event.value.name
    this.getIATACode(city, type)

  }


  /**
   *  Send form to parent component
   */
  public search(): void {
    const origin = this.form.get("origin")?.value?.name;
    const destination = this.form.get("destination")?.value?.name;

    if (origin === destination) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Origin and destination cannot be the same. Please choose a different destination.',
      });
    } else {
      this.store.dispatch(updateSearch({ searchData: this.form.getRawValue() }));
    }

  }

  /**
   * Filter city based on user input
   * @param event 
   */
  public filterCity(event: AutoCompleteCompleteEvent): void {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.cities as any[]).length; i++) {
      let city = (this.cities as any[])[i];
      if (city.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(city);
      }
    }

    this.filteredCities = filtered;
  }

  /**
   * Call service to get airport details
   * @param city 
   * @param type 
   */
  private getIATACode(city: string, type: string): void {
    this.airportService
      .getAirports(city)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res) {
            const currentCity = this.form.get(type)?.value.name
            const IATACode = res[0].iata
            this.form.patchValue({ [type]: { name: currentCity, code: IATACode } })
            this.disableButton = false;
            this.loadingButton = false;
          }
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.statusText });
        }
      })
  }

  /**
  * Get all currencies from server
  */
  private getAllCurrencies(): void {
    this.currencyService
      .getCurrencyList()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.currencies = Object.keys(res).map((key) => ({
            name: res[key].name,
            code: key,
            symbol: res[key].symbol
          }));
          this.loadingCombo = false
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Internal Error. Please try again.' });
        }
      })
  }


}



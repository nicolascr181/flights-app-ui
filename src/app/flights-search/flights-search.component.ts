import { Component, EventEmitter, inject, OnInit, Output, DestroyRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TripType } from './enum';
import { PrimeNGImports } from '../primeng-imports';
import { CommonModule } from '@angular/common';
import { CurrencyService } from '../services/currency.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-flights-search',
  standalone: true,
  imports: [CommonModule, PrimeNGImports, ReactiveFormsModule],
  templateUrl: './flights-search.component.html',
  styleUrl: './flights-search.component.scss',
  providers: [CurrencyService]
})
export class FlightsSearchComponent implements OnInit {

  form: FormGroup;
  currencies: { name: string; code: string; symbol: string }[] = [];
  tripTypes: TripType[] = Object.values(TripType);
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  destroyRef = inject(DestroyRef);
  loadingCombo = true;


  constructor(private fb: FormBuilder, private currencyService: CurrencyService) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      tripType: [TripType.Oneway, Validators.required],
      currencyType: ['USD', Validators.required]
    });
  }
  ngOnInit(): void {
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
          this.loadingCombo = false
        }
      })
  }

  search() {
    this.searchEvent.emit(this.form.getRawValue());
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ICurrency } from '../interfaces/interfaces';
import { TripType } from './enum';
import { PrimeNGImports } from '../primeng-imports';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-flights-search',
  standalone: true,
  imports: [CommonModule, PrimeNGImports, ReactiveFormsModule],
  templateUrl: './flights-search.component.html',
  styleUrl: './flights-search.component.scss'
})
export class FlightsSearchComponent implements OnInit {
  form: FormGroup;

  currencies: ICurrency[] = [
    { name: "USD", code: "en-US" },
    { name: "YEN", code: "ja-JP" },
    { name: "EUR", code: "es-ES" },
  ]
  tripTypes: TripType[] = Object.values(TripType);
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      tripType: [TripType.Oneway, Validators.required],
      currencyType: [this.currencies[0].code, Validators.required]
    });
  }
  ngOnInit(): void {
  }

  search() {
    this.searchEvent.emit(this.form.getRawValue());
  }
}

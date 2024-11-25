import { Component, Input, OnInit } from '@angular/core';
import { IJourney } from '../interfaces/interfaces';
import { FlightsCardComponent } from '../flights-card/flights-card.component';
import { PrimeNGImports } from '../primeng-imports';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-flights-container-list',
  standalone: true,
  imports: [CommonModule, PrimeNGImports, FlightsCardComponent],
  templateUrl: './flights-container-list.component.html',
  styleUrl: './flights-container-list.component.scss',
  providers: [CurrencyPipe]
})
export class FlightsContainerListComponent implements OnInit {

  @Input() journeys?: IJourney[];


  constructor(private currencyPipe: CurrencyPipe) {

  }

  ngOnInit(): void {

  }

  /**
   * Formats number to match symbol currency
   * @param price 
   * @param currencyCode 
   * @returns 
   */
  getFormattedPrice(price: number, currencyCode: string): string {
    return this.currencyPipe.transform(price, currencyCode) ?? '';
  }

}

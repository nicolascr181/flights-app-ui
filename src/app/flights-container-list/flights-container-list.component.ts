import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FlightsCardComponent } from '../flights-card/flights-card.component';
import { IJourney } from '../interfaces/index';
import { PrimeNGImports } from '../primeng-imports';


@Component({
  selector: 'app-flights-container-list',
  standalone: true,
  imports: [CommonModule, PrimeNGImports, FlightsCardComponent],
  templateUrl: './flights-container-list.component.html',
  styleUrl: './flights-container-list.component.scss',
  providers: [CurrencyPipe]
})
export class FlightsContainerListComponent {

  @Input() public journeys?: IJourney[];

  constructor(private currencyPipe: CurrencyPipe) {
  }

  /**
   * Formats number to match symbol currency
   * @param price 
   * @param currencyCode 
   * @returns 
   */
  public getFormattedPrice(price: number, currencyCode: string): string {
    return this.currencyPipe.transform(price, currencyCode) ?? '';
  }

}

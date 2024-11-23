import { Component, Input } from '@angular/core';
import { IJourney } from '../interfaces/interfaces';
import { FlightsCardComponent } from '../flights-card/flights-card.component';
import { PrimeNGImports } from '../primeng-imports';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flights-container-list',
  standalone: true,
  imports: [CommonModule, PrimeNGImports, FlightsCardComponent],
  templateUrl: './flights-container-list.component.html',
  styleUrl: './flights-container-list.component.scss'
})
export class FlightsContainerListComponent {

  @Input() journeys?: IJourney[];

}

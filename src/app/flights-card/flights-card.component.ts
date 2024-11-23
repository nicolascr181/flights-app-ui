import { Component, Input } from '@angular/core';
import { IFlight } from '../flights-container-list/interfaces';

@Component({
  selector: 'app-flights-card',
  standalone: true,
  imports: [],
  templateUrl: './flights-card.component.html',
  styleUrl: './flights-card.component.scss'
})
export class FlightsCardComponent {

  @Input() flights?: IFlight[]

}

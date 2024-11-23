import { Component, Input } from '@angular/core';
import { IFlight } from '../interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flights-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flights-card.component.html',
  styleUrl: './flights-card.component.scss'
})
export class FlightsCardComponent {

  @Input() flights?: IFlight[]

}

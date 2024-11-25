import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFlight } from '../interfaces/index';


@Component({
  selector: 'app-flights-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flights-card.component.html',
  styleUrl: './flights-card.component.scss'
})
export class FlightsCardComponent {

  @Input() public flights?: IFlight[]

}

import { Component, Input } from '@angular/core';
import { IJourney } from './interfaces';

@Component({
  selector: 'app-flights-container-list',
  standalone: true,
  imports: [],
  templateUrl: './flights-container-list.component.html',
  styleUrl: './flights-container-list.component.scss'
})
export class FlightsContainerListComponent {

  @Input() journeys?: IJourney[];

}

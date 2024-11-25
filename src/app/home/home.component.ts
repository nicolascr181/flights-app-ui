import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrimeNGImports } from '../primeng-imports';
import { IJourney, IResponse, ISearchData } from '../interfaces/interfaces';
import { MessageService } from 'primeng/api';
import { JourneyService } from '../services/journey.service';
import { FlightsSearchComponent } from '../flights-search/flights-search.component';
import { CommonModule } from '@angular/common';
import { FlightsContainerListComponent } from '../flights-container-list/flights-container-list.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SearchState, selectSearchData } from '../store/search.reducer';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PrimeNGImports, FlightsSearchComponent, FlightsContainerListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [JourneyService, MessageService]
})
export class HomeComponent implements OnInit {

  searchData!: ISearchData;
  journeys?: IJourney[]
  responses?: IResponse[]
  destroyRef = inject(DestroyRef);
  searchData$!: Observable<ISearchData | null>;

  constructor(private journeyService: JourneyService,
    private messageService: MessageService,
    private store: Store<SearchState>) {
    this.searchData$ = this.store.select(selectSearchData);
  }

  ngOnInit(): void {
    this.searchData$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (searchData) => {
          if (searchData) {
            this.search(searchData);
          }
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Internal Error. Please try again.' });
        }
      })
  }

  /**
   * Get all available journeys from service based on origin and destination
   * @param $event 
   * @returns 
   */
  search($event: ISearchData) {
    this.searchData = $event;

    if (!this.searchData) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid search data. Please try again.' });
      return;
    }

    const filterSearchData = {
      origin: this.searchData.origin?.code || '',
      destination: this.searchData.destination?.code || '',
      tripType: this.searchData.tripType,
      currencyType: this.searchData.currencyType,
    };

    this.journeyService.getJourneyList(filterSearchData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res: IResponse[]) => {
          this.responses = res;

          const hasEmptyJourneys = this.responses.some(response => response?.journeys?.length === 0);
          const message = hasEmptyJourneys
            ? { severity: 'warn', summary: 'Warning', detail: 'No available flights were found.' }
            : { severity: 'success', summary: 'Success', detail: 'The flights were obtained successfully.' };

          this.messageService.add(message);
        },
        error: (err: any) => {

          const errorMessage = err?.statusText || 'An unexpected error occurred. Please try again later.';
          this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
        },
      });
  }
}

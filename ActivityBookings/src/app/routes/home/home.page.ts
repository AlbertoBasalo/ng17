import { ChangeDetectionStrategy, Component, InputSignal, Signal, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Activity } from '@domain/activity.type';
import { DEFAULT_FILTER, Filter, SortOrders } from '@domain/filter.type';
import { FavoritesStore } from '@state/favorites.store';
import { FilterWidget } from '@ui/filter.widget';
import { Observable, switchMap } from 'rxjs';
import { ActivityComponent } from './activity.component';
import { HomeService } from './home.service';

@Component({
  standalone: true,
  imports: [ActivityComponent, FilterWidget],
  template: `
    <article>
      <header>
        <h2>Activities</h2>
        <lab-filter />
      </header>
      <main>
        @for (activity of activities(); track activity.id) {
          <lab-activity [activity]="activity" [(favorites)]="favorites" (favoritesChange)="onFavoritesChange($event)" />
        }
      </main>
      <footer>
        <small>
          <span>
            Filtering by <mark>{{ search() }}</mark>
          </span>
          <span>
            Order by <mark>{{ orderBy() }} {{ sort() }}</mark>
          </span>
          <span>
            Got <mark>{{ activities().length }}</mark> activities.
          </span>
          <span>
            You have selected <mark>{{ favorites.length }}</mark> favorites.
          </span>
        </small>
      </footer>
    </article>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {
  // * Injected services division

  // The service to get the activities
  service = inject(HomeService);

  // ? This may must go to the service facade
  // Signal based store of the favorites
  #favorites = inject(FavoritesStore);

  // * Input signals division

  // The search input signal coming from the route query params
  search: InputSignal<string> = input<string>(DEFAULT_FILTER.search);
  // The order by input signal coming from the route query params
  orderBy: InputSignal<string> = input<string>(DEFAULT_FILTER.orderBy);
  // The sort input signal coming from the route query params
  sort: InputSignal<SortOrders> = input<SortOrders>(DEFAULT_FILTER.sort);

  // * Signals division

  /** The list of activities to be presented */

  /** Computed filter from the search, orderBy and sort signals */
  #filter: Signal<Filter> = computed(() => ({ search: this.search(), orderBy: this.orderBy(), sort: this.sort() }));
  /** The filter signal as an observable */
  #filter$: Observable<Filter> = toObservable(this.#filter);
  /** A function that returns the observable of activities based on the filter */
  #getActivitiesByFilter$ = (filter: Filter) => this.service.getActivitiesByFilter$(filter);
  /** Pipeline to get the activities observable based on the filter observable */
  #filter$SwitchMapApi$: Observable<Activity[]> = this.#filter$.pipe(switchMap(this.#getActivitiesByFilter$));
  /** The activities signal based on the filter observable */
  activities: Signal<Activity[]> = toSignal(this.#filter$SwitchMapApi$, { initialValue: [] });

  // * Properties division

  /** The list of favorites */
  favorites: string[] = this.#favorites.state();

  // * Event handlers division

  /** Handles the change of the favorites list
   * @param favorites The new list of favorites
   */
  onFavoritesChange(favorites: string[]): void {
    console.log('Favorites changed', favorites);
    this.#favorites.setState(favorites);
  }
}

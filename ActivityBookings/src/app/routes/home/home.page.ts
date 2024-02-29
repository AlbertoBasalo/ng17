import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Activity } from '@domain/activity.type';
import { FavoritesStore } from '@state/favorites.store';
import { ActivityComponent } from './activity.component';
import { HomeService } from './home.service';

@Component({
  standalone: true,
  imports: [ActivityComponent],
  template: `
    <article>
      <header>
        <h2>Activities</h2>
      </header>
      <main>
        @for (activity of activities(); track activity.id) {
          <lab-activity [activity]="activity" [(favorites)]="favorites" (favoritesChange)="onFavoritesChange($event)" />
        }
      </main>
      <footer>
        <small>
          Showing <mark>{{ activities().length }}</mark> activities, you have selected
          <mark>{{ favorites.length }}</mark> favorites.
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
  #service = inject(HomeService);

  // ? This may must go to the service facade
  // Signal based store of the favorites
  #favorites = inject(FavoritesStore);

  // * Signals division

  /** The list of activities to be presented */
  activities: Signal<Activity[]> = toSignal(this.#service.getActivities$(), { initialValue: [] });

  // * Properties division

  /** The list of favorites */
  favorites: string[] = this.#favorites.state();

  // * Methods division

  /** Handles the change of the favorites list
   * @param favorites The new list of favorites
   */
  onFavoritesChange(favorites: string[]): void {
    console.log('Favorites changed', favorites);
    this.#favorites.setState(favorites);
  }
}

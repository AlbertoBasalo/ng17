import { Injectable, Injector, computed, inject } from '@angular/core';
import { Activity, NULL_ACTIVITY } from '@shared/domain/activity.type';
import { PageStore } from '@shared/services/page.store';
import { ActivitySlugService } from './activity-slug.service';

@Injectable()
export class ActivitySlugPageStore extends PageStore {
  // Injection division
  readonly #service = inject(ActivitySlugService);

  // State division
  #getActivityState = this.addNewState<Activity>(NULL_ACTIVITY);
  #getParticipantsState = this.addNewState<number>(0);

  // Selectors division
  getActivityStage = computed(() => this.#getActivityState().stage);
  activity = computed(() => this.#getActivityState().result);
  participants = computed(() => this.#getParticipantsState().result);

  constructor(injector: Injector) {
    super(injector);
  }

  // Commands division
  getActivityBySlug(slug: string) {
    this.connectCommandToState(this.#service.getActivityBySlug$(slug), this.#getActivityState);
  }
  getParticipantsByActivityId(activityId: number) {
    this.connectCommandToState(this.#service.getParticipantsByActivityId$(activityId), this.#getParticipantsState);
  }
}

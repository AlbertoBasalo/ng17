import { ChangeDetectionStrategy, Component, Input, OnInit, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageTemplate } from '@shared/ui/page.template';
import { ActivitySlugComponent } from './activity-slug.component';
import { ActivitySlugPageStore } from './activity-slug.page-store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageTemplate, ActivitySlugComponent],
  providers: [ActivitySlugPageStore],
  template: `
    <lab-page [store]="store">
      @if (getActivityStage() === 'success') {
        <lab-activity-slug [activity]="activity" [participants]="participants" (booking)="onBooking()" />
      }
    </lab-page>
  `,
})
export default class ActivitySlugPage implements OnInit {
  // Injection division
  readonly #router = inject(Router);
  readonly store = inject(ActivitySlugPageStore);

  // I/O division
  @Input({ required: true }) slug!: string;

  // Data division
  getActivityStage = this.store.getActivityStage;
  activity = this.store.activity;
  participants = this.store.participants;
  availablePlaces = computed(() => this.activity().maxParticipants - this.participants());
  // Life-cycle division
  constructor() {
    effect(() => this.#setPageTitle(), { allowSignalWrites: true });
    effect(() => this.store.getParticipantsByActivityId(this.activity().id), { allowSignalWrites: true });
  }

  ngOnInit() {
    this.store.getActivityBySlug(this.slug);
  }

  // Event handlers division
  onBooking() {
    this.#router.navigate(['/', 'bookings', 'new'], {
      queryParams: {
        activityId: this.activity().id,
        activityName: this.activity().name,
        activityPrice: this.activity().price,
        availablePlaces: this.availablePlaces(),
      },
    });
  }

  // Effects division
  #setPageTitle() {
    if (this.getActivityStage() === 'success') {
      this.store.setTitle(this.activity().name);
    } else {
      this.store.setTitle(this.slug);
    }
  }
}

import { Injectable, Injector, computed, inject } from '@angular/core';
import { Booking, NULL_BOOKING } from '@shared/domain/booking.type';
import { connectCommandToSignal, createCommandSignal } from '@shared/services/command.state';
import { NewBookingService } from './new-booking.service';

@Injectable()
export class NewBookingPageStore {
  // Injection division
  readonly #service = inject(NewBookingService);
  readonly #injector = inject(Injector);

  // State division
  #postBookingState = createCommandSignal<Booking>(NULL_BOOKING);

  // Selectors division
  postBookingStage = computed(() => this.#postBookingState().stage);

  // Commands division
  postBooking(booking: Partial<Booking>) {
    connectCommandToSignal(this.#service.postBooking$(booking), this.#postBookingState, this.#injector);
  }
}

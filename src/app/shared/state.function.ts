import {
  DestroyRef,
  Injector,
  assertInInjectionContext,
  inject,
  signal,
} from '@angular/core';
import { Observable } from 'rxjs';

/**
 * The possible status of an observable command
 */
export type Status = 'pending' | 'success' | 'error';

/**
 * A structure representing the state of an observable
 */
export type State<T> = {
  /** The value (initial or produced by the observable) */
  value: T;
  /** The error, if any, produced by the observable */
  error?: any;
  /** The status of the observable */
  status: Status;
};

const counter = {
  subscriptions: 0,
  nexts: 0,
  errors: 0,
  completes: 0,
  unsubscriptions: 0,
};

/**
 * Converts an observable to a state signal
 * @param source$ The observable emitting the value
 * @param value The initial value
 * @returns A read-only signal with the state changes
 * @see State
 */
export function toState<T>(
  source$: Observable<T>,
  value: T,
  injector?: Injector,
) {
  console.log('asserting toState');
  injector || assertInInjectionContext(toState);
  console.log('asserted toState');
  const destroyRef = injector?.get(DestroyRef) || inject(DestroyRef);
  const state = signal<State<T>>({ value, status: 'pending' });
  const subscription = source$.subscribe({
    next: (value) => {
      state.update((s) => ({ ...s, value, status: 'success' }));
      logNext();
    },
    error: (error) => {
      state.update((s) => ({ ...s, error, status: 'error' }));
      logError();
    },
    complete: () => {
      logComplete();
    },
  });
  logSubscription();
  destroyRef.onDestroy(() => {
    if (subscription) {
      subscription.unsubscribe();
      logUnsubscription();
    }
  });
  return state.asReadonly();
}

function logSubscription() {
  counter.subscriptions++;
  console.log('subscriptions', counter);
}
function logUnsubscription() {
  counter.unsubscriptions++;
  console.log('unsubscriptions', counter);
}
function logError() {
  counter.errors++;
  console.log('errors', counter);
}
function logNext() {
  counter.nexts++;
  console.log('nexts', counter);
}
function logComplete() {
  counter.completes++;
  console.log('completes', counter);
}

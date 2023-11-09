import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Activity } from '../../shared/activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  getActivities$(): Observable<Activity[]> {
    return of([
      { id: '1', name: 'Hiking' },
      { id: '2', name: 'Biking' },
      { id: '3', name: 'Swimming' },
    ]).pipe(delay(1000));
  }
}

import { Observable, defer } from 'rxjs';

export function toColdObservable<T>(promise: Promise<T>): Observable<T> {
  return defer(() => promise);
}

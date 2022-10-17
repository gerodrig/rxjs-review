import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Exercise: Make sure that final observables emit the same value
 *
 * Tip: Hot Observable? subjects?
 * hot observable refers to an observable that is already emitting values before any observer subscribes to it.
 * cold observable refers to an observable that starts emitting values only when an observer subscribes to it.
 */

(() => {
  //! == DO NOT MODIFY THIS BLOCK ====================
  const clock$ = interval(1000).pipe(
    take(5),
    map((val) => Math.round(Math.random() * 100))
  );
  // Do not modify the observable creation
  // ============================================

  //create a subject
  const subject$ = new Subject();

  //subscribe to the subject
  clock$.subscribe(subject$);

  // This are the 2 observable that must emit the same value.
  subject$.subscribe((val) => console.log('obs1', val));
  subject$.subscribe((val) => console.log('obs2', val));
})();


import { fromEvent, interval, take, switchMap, concatMap } from 'rxjs';

//Concat map operator is used to map the values to an observable and then merge all the observables into a single observable
//Concat map operator is used to merge the observables in a sequential manner

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");


click$.pipe(
    concatMap(() => interval$)
).subscribe(console.log);

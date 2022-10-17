
import { exhaustMap, fromEvent, interval, take } from 'rxjs';

//? exhaust map operator is used to ignore all the values from the source observable until the inner observable completes
//? it is used to ignore all the values from the source observable until the inner observable completes

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");


click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log);


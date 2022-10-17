
import { fromEvent, interval, sample } from "rxjs";

//? Sample operator in Rxjs is a function that takes a source observable and returns a new observable


const interval$ = interval(500);
const click$ = fromEvent(document, 'click');


interval$.pipe(
    sample(click$)
).subscribe(console.log);
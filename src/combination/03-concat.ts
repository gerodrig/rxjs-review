
import { concat, interval, take } from "rxjs";

//concat function in Rxjs is a function that takes two observables and returns a new observable that emits the values from both of the original observables


const interval$ = interval(1000);

concat(interval$.pipe( take(3), take(2)), interval$).subscribe(console.log);
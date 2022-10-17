import { fromEvent, map, merge } from 'rxjs';

//merge function in Rxjs merges multiple observables into one observable

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

merge(
  keyup$.pipe(map((event) => event.type)),
  click$.pipe(map((event) => event.type))
).subscribe(console.log);

import { of, range, asyncScheduler } from 'rxjs';


//using single values with of
// const source$ = of(1,2,3,4,5);

//using a range
const source$ = range(1,100, asyncScheduler);



console.log('Start');

source$.subscribe(console.log);

console.log('End');
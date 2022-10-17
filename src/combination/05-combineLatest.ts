
import { fromEvent, map, merge, combineLatest, forkJoin } from 'rxjs';


//combine latest is a Rxjs function that takes in an array of observables and returns a new observable that emits the latest value from each of the source observables

//merge function in Rxjs merges multiple observables into one observable

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// const click$ = fromEvent<MouseEvent>(document, 'click');

// combineLatest( //! deprecated user [] to pass in multiple
//   [keyup$.pipe(map((event) => event.type)),
//   click$.pipe(map((event) => event.type))]
// ).subscribe(console.log);


const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'benito@gmail.com';
input2.placeholder = '********';

input2.type = 'password';

document.querySelector('body').append(input1, input2);

//Helper
const getInputStream = (elem: HTMLElement) => fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map((event) => (event.target as HTMLInputElement).value)
    );

combineLatest(
    [
        getInputStream(input1),
        getInputStream(input2)
    ]
).subscribe(console.log);
import { interval, timer } from 'rxjs';

const observer = {
    next: (value) => console.log('next:', value),
    complete: () => console.log('complete'),
}

const todayin5 = new Date(); // now
todayin5.setSeconds(todayin5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(todayin5);

console.log('Start');

//interval$.subscribe(observer);
timer$.subscribe(observer);

console.log('End');
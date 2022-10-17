import { asyncScheduler, of, scheduled } from 'rxjs';

//deprecated form
// const observable$ = of<number>(1, 2, 3, 4, 5, 6);
// const observable$ = scheduled<number>(of(1, 2, 3, 4, 5, 6), asyncScheduler);
const observable$ = scheduled<any>(of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true)), asyncScheduler);


console.log('Start');
observable$.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('sequence completed and end')
});

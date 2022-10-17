import { interval, reduce, take, tap } from 'rxjs';
//explanation of reduce in javascript
//? const numbers = [1, 2, 3, 4, 5];

const totalReducer = (accumulator, currentValue) => accumulator + currentValue;

//? const total = numbers.reduce(totalReducer, 15);
//? console.log(total);

interval(1000)
.pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer, 0)
)
.subscribe({
    next: (value) => console.log('next:', value),
    complete: () => console.log('complete'),
});
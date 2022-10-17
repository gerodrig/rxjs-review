import { of, take, tap } from 'rxjs';


const numbers$ = of(1, 2, 3, 4, 5);


//take: take the first 3 values
numbers$.pipe(
    tap(t => console.log('tap', t)),
    take(3)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete')
})
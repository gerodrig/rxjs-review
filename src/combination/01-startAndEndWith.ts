import { endWith, of, startWith } from "rxjs";



//Start with operator is used to emit the value before the actual observable starts emitting the values.
//endWith operator is used to emit the value after the actual observable completes emitting the values.


const numbers$ = of(1, 2, 3, 4, 5).pipe(
    startWith(0), // this will emit 0 before the actual observable starts emitting the values
    endWith('end') // this will add 'end' after the observable completes
)

numbers$.subscribe(console.log)
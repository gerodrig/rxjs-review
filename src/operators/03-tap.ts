import { map, range, tap } from 'rxjs';


const numbers$ = range(1, 5).pipe(
    tap (x => {
        console.log('before', x)
        return 100;
    }),
    map(val => val * 10),
    tap ({
        next: val => console.log('after', val),
        complete: () => console.log('Completed')
    })
).subscribe( val => console.log('subs:', val) );
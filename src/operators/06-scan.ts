import { from, map, reduce, scan } from "rxjs";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const totalAccumulator = (accumulator, number) => {
//     return accumulator + number;
// }

const totalAccumulator = (accumulator, number) => accumulator + number;

//Reduce

from(numbers).pipe(
    reduce(totalAccumulator, 0)
)
.subscribe(console.log);


//Scan
from(numbers).pipe(
    scan(totalAccumulator, 0)
)
.subscribe(console.log);

// Redux using Scan
interface User {
    id?: string;
    auth?: boolean;
    token?: string;
    age?: number;
}

const user: User[] = [
    { id: '1', auth: false, token: null },
    { id: '2', auth: true, token: 'ABC' },
    { id: '3', auth: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan((acc, curr) => {
        return { ...acc, ...curr }
    }, { age: 37  } as User)
);

const id$ = state$.pipe(
    map(state => state )
);

id$.subscribe(console.log);



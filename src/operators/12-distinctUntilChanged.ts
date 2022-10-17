import { distinctUntilChanged, from, of } from "rxjs";


//? Distinct until changed operator emits only when the value is different from the previous one. It is useful when you want to emit only unique values.
//!This is useful for consecutive duplicate values. It does not work for non-consecutive duplicate values.


const numbers$ = of(1,'1', 1, 1, 3, 3, 2, 2, 4, 4, 5, 3,'1', 1);

numbers$.pipe(
    //? distinct operator uses === operator to check the equality of the values
    distinctUntilChanged()
).subscribe(console.log);

interface Character {
    name: string;
}

const characters: Character[] = [
    {
        name: 'Megaman'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'X'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Dr. Willy'
    },
    {
        name: 'X'
    },
];

from(characters).pipe(
    //? distinct operator uses === operator to check the equality of the values
    // With objects we need to pass a function to the distinct operator to check the equality of the objects
    distinctUntilChanged((prev, curr) => prev.name === curr.name)
).subscribe(console.log);
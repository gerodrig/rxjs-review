import { distinct, from, of } from "rxjs";


//? Distinct operator is like a filter operator but it only emits the distinct values like a SET in javascript


const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(
    //? distinct operator uses === operator to check the equality of the values
    distinct()
).subscribe(console.log);

interface Character {
    name: string;
}

const characters: Character[] = [
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
        name: 'Dr. Willy'
    },
    {
        name: 'X'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Zero'
    },
];

from(characters).pipe(
    //? distinct operator uses === operator to check the equality of the values
    // With objects we need to pass a function to the distinct operator to check the equality of the objects
    distinct((character) => character.name)
).subscribe(console.log);
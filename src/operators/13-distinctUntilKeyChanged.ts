import { distinctUntilKeyChanged, from } from "rxjs";


//? Distinct until key changed operator is used to emit values only when the key value. 
//? This is used for key value pairs in objects.


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
    distinctUntilKeyChanged('name')
).subscribe(console.log);
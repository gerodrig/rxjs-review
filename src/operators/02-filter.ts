import { filter, from, fromEvent, map, range}  from 'rxjs';


// return an observable that emits only even numbers
range(1, 10).pipe(
    filter<number>((val, index) => {
        console.log('index', index);
       return  val % 2 === 1
    }),
)
// .subscribe(console.log);

interface Characters {
    name: string;
    type: string;
}

const characters: Characters[] = [
    {
        type: 'hero',
        name: 'Batman',
    },
    {
        type: 'hero',
        name: 'Superman',
    },
    {
        type: 'villain',
        name: 'Joker',
    },
];

// return an observable that emits only villains
from<Characters[]>(characters).pipe(
    filter((character) => character.type !== 'hero'),
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(({code}) => code), //receives the keyboard event and returns the code
    filter((key) => key === 'Enter'),
);

keyup$.subscribe(console.log);
import { fromEvent, map, mapTo, pluck, range } from 'rxjs';


// range(1, 10).pipe(
//     map<number, string>(x => (x * 10).toString())
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keupKey$ = keyup$.pipe(
    //the following also replaces pluck using optional chaining
    map(({key}) => key)
);
const keyupKeyPluck$ = keyup$.pipe(
    // pluck('key'), //! deprecated
    map((value) => value?.key)
);
const keyupMapto$ = keyup$.pipe(
    //map will also be deprecated and replaced with map only
    // mapTo('key pressed') //! deprecated
    map((value) => 'key pressed')


);

//example with pluck. The pluck operator is a map operator that allows us to extract a property from an object

keupKey$.subscribe(code => console.log('map', code));
keyupKeyPluck$.subscribe(code => console.log('pluck', code));
keyupMapto$.subscribe(code => console.log('mapTo', code));
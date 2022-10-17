import { of, from } from 'rxjs';

/**
 *? of = take arguments and generate a sequence
 *? from = array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
};

const myIterable = myGenerator();

// for(let id of myIterable) {
//     console.log(id);
// }

from(myIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Benito');

const source$ = from(fetch('https://api.github.com/users/gerodrig'));

source$.subscribe(async (response) => {
    const data = await response.json();
    console.log(data);
});


source$.subscribe(observer);
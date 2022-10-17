import { interval, map, mergeMap, of, take, fromEvent, takeUntil } from 'rxjs';

//mergeMap. This operator in RxJs helps create multiple observbable streams from a single observable stream. 



const letters$ = of('a', 'b', 'c');

letters$.pipe(
    mergeMap(letter => interval(1000).pipe(
        map(i => letter + i),
        take(3),
    ))
)
// .subscribe({
//     next: (letter) => console.log('next:', letter),
//     complete: () => console.log('complete')
// });

//Count how much time user keeps mouse pressed
const mouseDown$ = fromEvent<MouseEvent>(document, 'mousedown');
const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log);
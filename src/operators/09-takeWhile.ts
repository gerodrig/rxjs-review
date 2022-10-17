import { fromEvent, map, takeWhile } from 'rxjs';


//? Take while operator  takes values from the source observable while the provided condition is true. Once the condition becomes false, the observable completes. 
fromEvent<MouseEvent>(document, 'click')
.pipe(
    map(({x, y}) => ({x, y})),
    //? last argument is optional, if true last value is included in the output
    takeWhile(({y}) => y <= 150, true)
)
.subscribe({
    next: (event) => console.log(event),
    complete: () => console.log('complete')
});
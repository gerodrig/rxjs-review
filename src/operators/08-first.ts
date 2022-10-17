import { first, fromEvent, map } from "rxjs";




//first only take the first value in one observable
fromEvent<MouseEvent>(document, "click").pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first( event => event.clientY >= 150)
    //take(1) can also be used to have the same result
).subscribe({
    next: (event) => console.log(event),
    complete: () => console.log("complete"),
});
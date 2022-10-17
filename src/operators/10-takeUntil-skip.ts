
import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

//? Takeuntil operator is used to emit values from the source observable until another observable emits a value.

//create element to show a counter
const counter = document.createElement("h1");
const button = document.createElement('button');

counter.innerHTML = '0';
button.innerHTML = 'Click Twice to Stop timer';
//add cursor pointer to button
button.style.cursor = 'pointer';

document.body.appendChild(counter);
document.body.appendChild(button);

//? Skip operator is used to skip the first n number of values emitted by the source observable.
const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click')
.pipe(
    tap( () => console.log('tap before Skip')),
    skip(1),
    tap( () => console.log('tap after Skip')),
)

//update the counter using the observable



counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => counter.innerHTML = val.toString(),
    complete: () => counter.innerHTML = counter.innerHTML + ` - Timer Stopped`
})

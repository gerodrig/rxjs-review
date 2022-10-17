import { auditTime, fromEvent, map, tap } from "rxjs";


//? Audit time operator - auditTime(1000) - emit the last value emitted by the source Observable within periodic time intervals


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    auditTime(1000),
).subscribe(console.log);
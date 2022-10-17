import { fromEvent } from "rxjs";


/**
 * DOM Events
 */

const source1$ = fromEvent<MouseEvent>(document, "click");
const source2$ = fromEvent<KeyboardEvent>(document, "keyup");


const observer = {
    next: (value: Event) => console.log("next", value)
};

//subscribe to both observables
source1$.subscribe( ({x, y}) => {
    console.log({x, y});
});
source2$.subscribe( event => console.log(event.key) );

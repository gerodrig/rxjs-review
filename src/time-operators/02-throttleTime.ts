
import { fromEvent, distinctUntilChanged, throttleTime, asyncScheduler } from 'rxjs';

//? Throttle time operator example. This operator will emit the first value and then will emit the next value after the given time.


///debounce time with clicks example for every 3 seconds 
fromEvent( document, 'click' ).pipe(
    throttleTime(3000)
).subscribe( console.log );


//Example 2
//debounce time with input example for every 3 seconds
const input = document.createElement('input');
document.querySelector('body').append(input);

//add h1 to div wrapper
const inputText = document.createElement('h1');
//add style to h1 wrap text inside div
inputText.innerHTML = '';
//center text
inputText.style.overflowWrap = 'break-word';
inputText.style.textAlign = 'start';
inputText.style.paddingInline = '30px';
document.querySelector('body').append(inputText);


const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

//apply debounce time of 3 seconds
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    distinctUntilChanged(),
).
subscribe({
    next: (event) => {
        inputText.innerHTML = event.target['value'];
    },
    complete: () => {
        console.log('complete');
    }
    
});
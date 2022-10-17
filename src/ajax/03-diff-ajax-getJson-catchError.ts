import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

//handle error
const handleErrors = (response: AjaxError) => {
    console.warn('Error', response.message);
    return of({
        ok: false,
        users: []
    })
}
    
        

//get json
ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'my-token': 'ABC123'
}).pipe(
    catchError(handleErrors)
).subscribe( data => console.log('getJson:', data));

//get ajax
ajax(url).pipe(
    catchError(handleErrors)
).subscribe( data => console.log('ajax:', data));

//third option using an error in observer
ajax.getJSON(url).pipe(
    catchError(handleErrors)
).subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error:', err),
    complete: () => console.log('complete')
});
import { catchError, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

//? Fetch response using chain of operators

// const fetchPromise = fetch(url);
// const handleError = (response: Response ) => {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }

const catchAjaxError = ( err: AjaxError ) => {
    console.warn('error in: ', err.message);
    return of([]);
}

// fetchPromise.
//     then(handleError)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.warn(error));


//?get response with async await
// const fetchAsync = async () => {

//     try {
//        //handle error
//         const response = await fetch(url);
//         const data = await response.json();
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         console.log(data);
//     } catch (error) {
//         console.warn(error);
//     }
// }

// fetchAsync();


//? Using rxjs ajax operator
ajax(url).pipe(
    // map(resp => resp.response)
    pluck('response'), //deprecated
    catchError(catchAjaxError) 

).subscribe(console.log);
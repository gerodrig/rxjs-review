import { fromEvent, map, tap, mergeMap, catchError, of, switchMap, exhaustMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

//helper
const httpLoginRequest = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    map(res => res.response['token'] ),
    //handle error
    catchError(err => of('xxx'))
);

//create a form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitButton = document.createElement('button');

//set form configuration
//Email
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

//Password
inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = '123456';

//Submit button
submitButton.innerHTML = 'Log in';

form.append(inputEmail, inputPassword, submitButton);

//add form to the body
document.querySelector('body').append(form);

//Streams
//prevent default form submit
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
//   mergeMap(httpLoginRequest), // this will trigger all requests like many clicks
  switchMap(httpLoginRequest), // this will trigger only the last request
  
//   exhaustMap(httpLoginRequest), // this will trigger only the first request

);

submitForm$.subscribe(token => console.log(token));
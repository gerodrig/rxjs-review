import { fromEvent, debounceTime, map, tap, Observable, mergeMap, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user';
import { GihubUsersResponse } from '../interfaces/github-users';


//References
const body  = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

//Streams

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


//helpers
const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = '';

    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'See page';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
};

//subscribe to different observables
// input$.pipe(
//     debounceTime(500),
//     map(event => {
//         const text = event.target['value'];
//         return ajax.getJSON(`https://api.github.com/users/${text}`);
//     } )
// ).subscribe(resp => {
//     resp.subscribe(console.log);
// }
// );

//merge all inner observables in one single observable and subscribe to it directly without nesting subscribe calls
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    mergeMap<KeyboardEvent, Observable<GihubUsersResponse>>(event => ajax.getJSON(`https://api.github.com/search/users?q=${event.target['value']}`)),
    // pluck('items'), //! pluck is deprecated
    map<GihubUsersResponse, GithubUser[]>((resp: any) => resp.items),
)
// .subscribe(showUsers);

//? SwitchMap operator cancels all previous requests and only subscribes to the last one

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    // mergeMap(event => ajax.getJSON(url + event.target['value'])) //This will make all requests
    switchMap(event => ajax.getJSON(url + event.target['value'])) //This will cancel all previous requests and only subscribes to the last one
).subscribe(console.log);



import { fromEvent, debounceTime, map, pluck, mergeAll, tap, Observable } from 'rxjs';
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
    map<KeyboardEvent, Observable<GihubUsersResponse>>(event => ajax.getJSON(`https://api.github.com/search/users?q=${event.target['value']}`)),
    mergeAll(),
    // pluck('items'), //! pluck is deprecated
    map<GihubUsersResponse, GithubUser[]>((resp: any) => resp.items),
).subscribe(users => {
    // console.log(users);
    showUsers(users);
}
);


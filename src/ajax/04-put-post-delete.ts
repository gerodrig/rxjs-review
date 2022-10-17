import { ajax } from 'rxjs/ajax';
const url = 'https://httpbin.org/delay/1';

// ajax.put(url, {
//     id: 1,
//     name: 'Benito'
// }, {
//     'my-token': 'ABC123'
// }).subscribe(console.log);


//?programatically define if we want post put, delete
ajax({
    url,
    method: 'POST',
    headers: {
        'my-token': 'ABC123'
    },
    body: {
        id: 1,
        name: 'Benito'
    }
}).subscribe(console.log);
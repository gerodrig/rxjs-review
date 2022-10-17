import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'my-token': 'ABC123'
}).subscribe( data => console.log('data:', data));
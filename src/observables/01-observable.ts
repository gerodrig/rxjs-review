import { Observable, Observer } from 'rxjs';

//1 way to create observable this is deprecated
//const observable = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('complete')
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');

    //Force an error
    // const a = undefined;
    // a.name = 'Test';

    subscriber.complete();
});

//deprecated
// obs$.subscribe( 
//     value => console.log('next:', value),
//     error => console.log('error:', error),
//     () => console.info('complete')
// );

obs$.subscribe(observer); //this is the same as above
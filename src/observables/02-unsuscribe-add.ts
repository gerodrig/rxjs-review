import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('error: ', error),
  complete: () => console.info('complete'),
};

const interval$ = new Observable<number>(subscriber => {
    // Create a counter: 1, 2, 3, 4, 5, ....

    //increase the counter every 1 second
    let count = 0;

    //we need to create an interval vaiable to stop the interval
    const interval = setInterval(() => {
        subscriber.next(++count);
    }, 1000);

    //this is the return of the observable. clear when the observable is destroyed
    return () => {
        clearInterval(interval);
        console.log('Interval destroyed');
    }
});

const subscription = interval$.subscribe(num => console.log('num:', num));

//call the unsubscribe method after 5 seconds
setTimeout(() => {
    subscription.unsubscribe();
}   , 5000);
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('error: ', error),
  complete: () => console.info('complete'),
};

// const interval$ = new Observable<number>(subscriber => {
//     // Create a counter: 1, 2, 3, 4, 5, ....

//     //increase the counter every 1 second
//     let count = 0;

//     //we need to create an interval vaiable to stop the interval
//     const interval = setInterval(() => {
//         subscriber.next(++count);
//     }, 1000);

//     //this is the return of the observable. clear when the observable is destroyed
//     return () => {
//         clearInterval(interval);
//         console.log('Interval destroyed');
//     }
// });

// const subscription = interval$.subscribe(num => console.log('num:', num));

// //call the unsubscribe method after 5 seconds
// setTimeout(() => {
//     subscription.unsubscribe();
// }   , 5000);

//USING SUBJECTS
const interval2$ = new Observable<number>((subscriber) => {
  //create a random number every 1 second
  const intervalID = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  //clear the interval when the observable is destroyed
  return () => {
    clearInterval(intervalID);
    console.log('Interval destroyed');
  };
});


/* SUBJECT DETAILS
*   1- Caste multiple subscriptions
*   2- Subject is an observer
*   3- Next, error and complete
*/

//Create the subject
const subject$ = new Subject();

//Subscribe to the subject
const subscription = interval2$.subscribe(subject$);

// const subscription1 = interval2$.subscribe((num) => console.log('num1:', num));
// const subscription2 = interval2$.subscribe((num) => console.log('num2:', num));

const subscription1 = subject$.subscribe((num) => console.log('num1:', num));
const subscription2 = subject$.subscribe((num) => console.log('num2:', num));

//call the unsubscribe method after 5 seconds
setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);

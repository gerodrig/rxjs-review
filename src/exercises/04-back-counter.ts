import { interval, map, take } from 'rxjs';

/**
 * Exercise: Make the counter works in backward direction
 * starting from 7
 */

// Expected output ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const start = 7;
    const countdown$ = interval(700).pipe(
        // User the required rxjs operators
        // to make the counter works in backward direction
        //reverse direction
        map( val => start - val),
        //stop at 0
        take(start + 1)
    );
    

    // ! Do not modify this line ==================
    countdown$.subscribe( console.log ); // =
    // ======================================
})();
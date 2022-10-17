import { interval, timer, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
/**
 * Exercise: Combine the two observables (letters$, numbers$)
 * to create a new observable that emits the last values emitted
 */

//  Expected output:
// a1
// a2
// b2
// b3
// c3
// c4
// d4
// d5
// e5

(() =>{

    const letters  = ['a','b','c','d','e'];
    const numbers = [1,2,3,4,5];

    // Emite letras cada segundo
    const letters$  = interval(1000).pipe(
        map( i => letters[i] ),
        take( letters.length )
    );
    
    // Emite numeros del 1 al 5 cada segundo, pero tiene un delay inicial
    // de 500 milésimas 
    const numbers$ = timer(500,1000).pipe(
        map( i => numbers[i] ),
        take( numbers.length )
    );

    // ========================================
    // Start coding here
    // Note: the subscribe must be as follows:
    //       .subscribe( console.log )
    // in other words, the output must be:
    // processed by console.log
    // ========================================
    //mergemap o
    combineLatest(
        [letters$, numbers$]
    ).pipe(
        map(([letter, number]) => letter + number)
    ).subscribe(console.log);

})();


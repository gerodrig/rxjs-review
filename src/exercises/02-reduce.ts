import { filter, from, reduce } from 'rxjs';

/**
 * Excercise: 
 * Sum all the numbers in the array using reduce.
 * You must filter only numbers and ignore the rest.
 * the output must be 32.
 * 
 * Tip:
 * isNan() is a function that checks if a value is a number.
 * Use filter<any>(...) to filter any type error.
 */

(() =>{


  const data = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(data).pipe(
    // work here
    filter<any>(value => !isNaN(value)),
    reduce((acc, value) => acc + value)

  ).subscribe( console.log ) // The output must be 32

})();

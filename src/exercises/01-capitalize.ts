/**
 * Excercise 1: 
 * create a print using observables
 * Note: We can use "FOR OF" loop. We must use an observable and call the funciton to capitalize the string
 */

 import { from, map, of } from "rxjs";

 /**
  * expected output  :
  * Batman
  * Joker
  * Robin
  * Catwoman
  * Penguin
  * Catwoman
  */
  (() =>{
 
 
     const names = ['batman', 'joker', 'robin', 'penguin', 'catwoman'];
   
     const capitalize = (name: string) => name.replace(/\b\w/g, l => l.toUpperCase());  
   
     // Change this for ofr with and observable and Capitalize the output.
     // for( let name of names ) {
     //   console.log( capitalize(name) )
     // }
 
     //? using of
     // of(...names).pipe(
     //   map(capitalize)
     // ).subscribe(console.log);
     
     //? using from 
     from(names).pipe(
         map(capitalize)
     ).subscribe(name => console.log(capitalize(name)));
   
   })();
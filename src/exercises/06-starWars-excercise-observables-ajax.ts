import { ajax } from 'rxjs/ajax';
import { switchMap, map, tap } from 'rxjs/operators';
import { zip, of } from 'rxjs';

/**
 * Excercise:
 *  
 * Submit 2 ajax requests HTTP (ajax) one after the other
 *
 * The first request must get the character from Star Wars
 *  Luke Skywalker, using the endpoint: /people/1/  
 * 
 *  The second request must get the object
 *   from the first request, and get species from the endpoint: /species/1/
 *  this will return an array of species, but we only need the first one
 *  use the first element of the array and get the species from the endpoint: /species/1/
 *  this shoudl return the species name (Human)
 * 
 */

// Expected response: 
// Information about humans in Star Wars universe
// example of the expected data:
/*
 { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
*/

// Expected respnse with the data processed:
// Return the following object: with both requests
// Remember to trigger the second request only when the first one is completed
// using the url from the first request

// Tip: use the zip operator to combine the two requests
// Tip: use the switchMap operator to trigger the second request
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Example of the expected response:
/*
    specie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
    character: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/


(() =>{

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================

    // fetch the endpoint to get lukskywalker
    getRequest(`${SW_API}/people/1/`).pipe(
        // Use the respective operators here
        //first response
        tap( response => console.log(response.species[0]) ),
        //second response
        switchMap( response => zip(of(response), getRequest(response.species[0])) ),
        //process the data
        map( ([character, specie]) => ({character, specie}) )
    //! DO NOT MODIFY THIS PART==
    ).subscribe( console.log )           // ==
    // =======================================

})();

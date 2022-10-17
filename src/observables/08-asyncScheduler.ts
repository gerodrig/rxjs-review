import { asyncScheduler } from "rxjs";

//With time scheduler we can use setTimeout and setInterval
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const greet = () => console.log("Hello!");
const greet2 = ({name, lastName}) => console.log(`Hello ${name} ${lastName}`);

// asyncScheduler.schedule(greet, 2000);
// asyncScheduler.schedule(greet2, 2000, { name: "Benito", lastName: "Martinez" });

const subscription  = asyncScheduler.schedule(function(state) {
  console.log("state", state);
  this.schedule(state + 1, 1000);
}, 3000, 0);

//unsubscribe after 6 seconds
// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000);

// unsubscribe with asyncScheduler
asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
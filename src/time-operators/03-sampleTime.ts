
import { fromEvent, interval, map, sampleTime } from 'rxjs';

//? Sample Time operator. this will emit the current time every second or defined interval

fromEvent<MouseEvent>(document, 'click').pipe(
    //? sample time is more efficient if defined first in the pipe
    sampleTime(2000),
    map(({x, y}) => ({x, y})),
).subscribe(console.log);

import { fromEvent, map, tap } from "rxjs";

const text  = document.createElement('div');
// add 5 paragraphs of lorem ipsum text
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus eget est ac sollicitudin. Sed euismod turpis nec mattis tempus. Nulla a elit ut orci efficitur ultricies sit amet at urna. Nullam tortor velit, dictum eu odio a, mollis interdum orci. Proin pretium mi sed lobortis tincidunt. Cras vitae tincidunt quam. Vivamus vel ligula lectus. Sed porta mi massa, vel laoreet magna tincidunt quis. Curabitur sit amet elit arcu. Suspendisse accumsan risus justo, ut hendrerit purus auctor non. Morbi pulvinar suscipit dolor, quis vulputate velit. Morbi accumsan leo erat, a ullamcorper massa congue id. Maecenas est odio, mollis eget turpis a, varius sagittis neque. Vestibulum facilisis eu magna eget sollicitudin. Aenean at turpis ante. Maecenas nibh tellus, sodales eu eros ac, eleifend interdum ante.
<br/><br/>
Suspendisse gravida tristique commodo. In in ultrices magna. Proin eget vulputate risus. Aliquam non ex id diam egestas pulvinar. Duis ultrices est ac sem pretium, nec consectetur arcu congue. Vivamus quis gravida nunc. Cras feugiat elementum eros quis fermentum. Mauris auctor dolor et purus tempus, vestibulum scelerisque justo faucibus. Ut leo velit, sodales a fermentum ac, interdum sed nisi. Integer dolor dui, volutpat et dapibus ut, euismod sed felis. Sed vel orci ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at leo et augue mattis mattis non vitae tortor.
<br/><br/>
Aenean dolor sem, feugiat scelerisque sollicitudin non, laoreet non velit. In id tortor lorem. Aliquam erat volutpat. Cras venenatis mi nunc, non ullamcorper urna vehicula vel. Etiam eleifend mi non massa volutpat ultricies. Donec et dolor eu nisl tempor vehicula ut sed metus. Cras vehicula magna nec volutpat tristique. Donec hendrerit magna turpis, non consequat tellus facilisis a.
<br/><br/>
Cras mollis, augue nec cursus vulputate, augue tellus venenatis nulla, eu luctus sem diam in dolor. Donec fermentum leo in ligula dapibus lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum in purus eu aliquet. Nunc quis ipsum vestibulum, maximus massa ullamcorper, faucibus est. Sed aliquam erat at vulputate volutpat. Morbi blandit sagittis ex quis tristique. Phasellus ac urna rhoncus, dapibus turpis vitae, hendrerit sapien. Sed vitae risus at augue blandit lobortis. Ut quis mi vitae magna eleifend dapibus. Duis quis semper elit. Curabitur vestibulum nunc in nisi elementum, quis volutpat turpis placerat. Nullam vitae elementum massa.
<br/><br/>
Nulla luctus ultricies molestie. Nunc nec feugiat nisi. Phasellus pharetra fringilla egestas. Cras mattis, nisl eu convallis volutpat, urna dui pharetra magna, ut feugiat est erat id diam. Fusce consectetur interdum tortor sed luctus. Curabitur vel vehicula ex. Aenean porta egestas urna, scelerisque laoreet odio ultricies eget. Integer sollicitudin lectus id tellus malesuada, at gravida magna ullamcorper.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus eget est ac sollicitudin. Sed euismod turpis nec mattis tempus. Nulla a elit ut orci efficitur ultricies sit amet at urna. Nullam tortor velit, dictum eu odio a, mollis interdum orci. Proin pretium mi sed lobortis tincidunt. Cras vitae tincidunt quam. Vivamus vel ligula lectus. Sed porta mi massa, vel laoreet magna tincidunt quis. Curabitur sit amet elit arcu. Suspendisse accumsan risus justo, ut hendrerit purus auctor non. Morbi pulvinar suscipit dolor, quis vulputate velit. Morbi accumsan leo erat, a ullamcorper massa congue id. Maecenas est odio, mollis eget turpis a, varius sagittis neque. Vestibulum facilisis eu magna eget sollicitudin. Aenean at turpis ante. Maecenas nibh tellus, sodales eu eros ac, eleifend interdum ante.
<br/><br/>
Suspendisse gravida tristique commodo. In in ultrices magna. Proin eget vulputate risus. Aliquam non ex id diam egestas pulvinar. Duis ultrices est ac sem pretium, nec consectetur arcu congue. Vivamus quis gravida nunc. Cras feugiat elementum eros quis fermentum. Mauris auctor dolor et purus tempus, vestibulum scelerisque justo faucibus. Ut leo velit, sodales a fermentum ac, interdum sed nisi. Integer dolor dui, volutpat et dapibus ut, euismod sed felis. Sed vel orci ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at leo et augue mattis mattis non vitae tortor.
<br/><br/>
Aenean dolor sem, feugiat scelerisque sollicitudin non, laoreet non velit. In id tortor lorem. Aliquam erat volutpat. Cras venenatis mi nunc, non ullamcorper urna vehicula vel. Etiam eleifend mi non massa volutpat ultricies. Donec et dolor eu nisl tempor vehicula ut sed metus. Cras vehicula magna nec volutpat tristique. Donec hendrerit magna turpis, non consequat tellus facilisis a.
<br/><br/>
Cras mollis, augue nec cursus vulputate, augue tellus venenatis nulla, eu luctus sem diam in dolor. Donec fermentum leo in ligula dapibus lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum in purus eu aliquet. Nunc quis ipsum vestibulum, maximus massa ullamcorper, faucibus est. Sed aliquam erat at vulputate volutpat. Morbi blandit sagittis ex quis tristique. Phasellus ac urna rhoncus, dapibus turpis vitae, hendrerit sapien. Sed vitae risus at augue blandit lobortis. Ut quis mi vitae magna eleifend dapibus. Duis quis semper elit. Curabitur vestibulum nunc in nisi elementum, quis volutpat turpis placerat. Nullam vitae elementum massa.
<br/><br/>
Nulla luctus ultricies molestie. Nunc nec feugiat nisi. Phasellus pharetra fringilla egestas. Cras mattis, nisl eu convallis volutpat, urna dui pharetra magna, ut feugiat est erat id diam. Fusce consectetur interdum tortor sed luctus. Curabitur vel vehicula ex. Aenean porta egestas urna, scelerisque laoreet odio ultricies eget. Integer sollicitudin lectus id tellus malesuada, at gravida magna ullamcorper.
`;

const body = document.querySelector('body');
body.appendChild(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.appendChild(progressBar);

//function that calculates the progress of the scroll
const calculateProgress = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//Streams the scroll event
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map(event => calculateProgress(event)),
    tap(console.log)
);


progress$.subscribe((percentage) => {
    progressBar.style.width = `${percentage}%`;
});
 const durationInput = document.querySelector('#duration');
 const startButton = document.querySelector('#start');
 const pauseButton = document.querySelector('#pause');
 const circle = document.querySelector('circle');

 let duration;
 const perimeter = circle.getAttribute('r') * 2 * Math.PI;
 circle.setAttribute('stroke-dasharray', perimeter);

 const timer = new Timer(durationInput, startButton, pauseButton, {
     onStart(totalDuration){
        console.log("Timer has started");
        duration = totalDuration;
     },
     onTick(timeRemaining) {
         
         //if (currentOffset >= -perimeter ) {
            circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining/duration - perimeter
            );
         //}
     },
     onComplete() {
        console.log("Timer is completed");
     }
    }
);

class Timer {
    constructor (durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
       this.IntervalId = null;

        this.startButton.addEventListener('click', this.IntervalId = this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    }
    pause = () => {
        clearInterval(this.intervalId);

    }
    // onDurationChange () {

    // }
    tick = () => {
        console.log("Tick");
    }
}

 const durationInput = document.querySelector('#duration');
 const startButton = document.querySelector('#start');
 const pauseButton = document.querySelector('#pause');

 const timer = new Timer(durationInput, startButton, pauseButton);

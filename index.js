class Timer {
    constructor (durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.IntervalId = null;
        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if(this.onStart) {
            this.onStart();
        }
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    }
    pause = () => {
        clearInterval(this.intervalId);

    }
    // onDurationChange () {

    // }
    tick = () => {
        if(this.timeRemaining > 0) {
            this.timeRemaining = this.timeRemaining - 1;
            if(this.onTick) {
                this.onTick();
            }
        }
        else { 
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining (time) {
        this.durationInput.value = time;
    }
}

 const durationInput = document.querySelector('#duration');
 const startButton = document.querySelector('#start');
 const pauseButton = document.querySelector('#pause');

 const timer = new Timer(durationInput, startButton, pauseButton, {
     onStart(){
        console.log("Timer has started");
     },
     onTick() {
        console.log("Timer just tick down");
     },
     onComplete() {
        console.log("Timer is completed");
     }
    }
);

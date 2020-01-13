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
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.intervalId = setInterval(this.tick, 10);
    }
    pause = () => {
        clearInterval(this.intervalId);

    }
    // onDurationChange () {

    // }
    tick = () => {
        if(this.timeRemaining > 0) {
            this.timeRemaining = this.timeRemaining - 0.01;
            if(this.onTick) {
                this.onTick(this.timeRemaining);
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
        this.durationInput.value = time.toFixed(2);
    }
}
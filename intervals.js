class Clock {
    constructor(hours,minutes,seconds) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds

        setInterval(this.tick.bind(this), "1000")
        //once something is called in the callback,
        //becomes function-style no matter how it is called
    }

    printTime() {
        //format time in hr:mm:ss
        //print w/ console log
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    tick() {

        this.seconds += 1
        if (this.seconds === 60) {
            this.seconds = 0
            this.minutes++
        }
        if (this.minutes === 60) {
            this.minutes = 0
            this.hours++
        }
        if (this.hours === 24) {
            this.hours = 0
        }
        this.printTime()
    }
}

let clock = new Clock(0,0,0)
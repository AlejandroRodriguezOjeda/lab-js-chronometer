class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
     this.currentTime++;
     printTimeCallback?.(this.currentTime); //! Esto lo encontre por internet y la verdad me parece bastane util
    },1000 )
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return (`0` + value).slice(-2)
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    
  }
}

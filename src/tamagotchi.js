export class Tamagotchi {
  constructor() {
    this.name = "";
    this.foodLevel = 10;
    this.sleep = 10;
    this.happiness = 10;
    this.busy = false;
    this.alive = true;
  }

  getHungry() {
    setInterval(() => {
      if(this.foodLevel > 0) {
        this.foodLevel -= 1;
      }
    }, 1000 * 60 * 60);
  }

  getTired() {
    setInterval(() => {
      if(this.sleep > 0) {
        this.sleep -= 1;
      }
    }, 1000 * 60 * 30);
  }

  getSad() {
    setInterval(() => {
      if(this.happiness > 0) {
        this.happiness -= 2;
      }
    }, 1000 * 60 * 60);
  }

  feed() {
    if (this.busy === false && this.alive === true) {
      this.foodLevel = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*60*30);
    }
  }

  bedTime() {
    if (this.busy === false && this.alive === true) {
      this.sleep = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*60*30);
    }
  }

  play() {
    if(this.busy === false && this.alive === true) {
      this.happiness = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*60*15);
    }
  }

  checkAlive() {
    setInterval(() => {
      if ((this.sleep === 0 && this.happiness === 0) || (this.sleep === 0 && this.foodLevel === 0) || (this.happiness === 0 && this.foodLevel === 0)) {
        this.alive = false;        
      } else {
        this.alive = true;
      }
    }, 1000*60);
  }

  reset() {
    this.alive = true;
    this.happiness = 10;
    this.foodLevel = 10;
    this.sleep = 10;
    for(let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
  }

  addName(name) {
    this.name = name;
  }

}
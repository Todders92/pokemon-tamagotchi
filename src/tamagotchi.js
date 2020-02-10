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
      this.foodLevel -= 1;
    }, 1000 * 60 * 60);
  }

  getTired() {
    setInterval(() => {
      this.sleep -= 1;
    }, 1000 * 60 * 30);
  }

  getSad() {
    setInterval(() => {
      this.happiness -= 2;
    }, 1000 * 60 * 60);
  }

  feed() {
    if (this.busy === false) {
      this.foodLevel = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*60*30);
    }
  }

  bedTime() {
    if (this.busy === false) {
      this.sleep = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*60*30);
    }
  }

  play() {
    if(this.busy === false) {
      this.happiness = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*60*15);
    }
  }  
}
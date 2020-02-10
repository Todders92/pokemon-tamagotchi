export class Tamagotchi {
  constructor() {
    this.name = "";
    this.foodLevel = 10;
    this.sleep = 10;
    this.happiness = 10;
  }
  getHungry() {
    setInterval(() => {
      this.foodLevel -= 1;
    }, 1000 * 60);
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
    this.foodLevel = 10;
  }

  bedTime() {
    
  }
}
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
}
export class Tamagotchi {
  constructor() {
    this.name = "";
    this.foodLevel = 10;
    this.sleep = 10;
    this.happiness = 10;
    this.busy = false;
    this.alive = true;
    this.level = 1;
    this.lifeTime = 0;
    this.potions = 1;
    this.candies = 1;
    this.firstEvolved = false;
    this.secondEvolved = false;
    this.candiesUsed = 0;
    this.potionsUsed = 0;
  }

  getHungry() {
    setInterval(() => {
      if(this.foodLevel > 0) {
        this.foodLevel -= 1;
      }
    }, 1000*3);
  }

  getTired() {
    setInterval(() => {
      if(this.sleep > 0) {
        this.sleep -= 1;
      }
    }, 1000*3);
  }

  getSad() {
    setInterval(() => {
      if(this.happiness > 0) {
        this.happiness -= 1;
      }
    }, 1000 * 2);
  }

  feed() {
    if (this.busy === false && this.alive === true) {
      this.foodLevel = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*2);
    }
  }

  bedTime() {
    if (this.busy === false && this.alive === true) {
      this.sleep = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*2);
    }
  }

  play() {
    if(this.busy === false && this.alive === true) {
      this.happiness = 10;
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*2);
    }
  }

  checkAlive() {
    setInterval(() => {
      if ((this.sleep === 0 && this.happiness === 0) || (this.sleep === 0 && this.foodLevel === 0) || (this.happiness === 0 && this.foodLevel === 0)) {
        this.alive = false;
        // let gameStats = [];
        // let timePlayed = this.lifeTime;
        // let highestLevel = this.level;
        // let totalCandies = this.candiesUsed;
        // let totalPotions = this.potionsUsed;
        // gameStats.push(timePlayed);
        // gameStats.push(highestLevel);
        // gameStats.push(totalCandies);
        // gameStats.push(totalPotions);
        // return gameStats;       
      } else {
        this.alive = true;
      }
    }, 500);
  }

  addName(name) {
    this.name = name;
  }

  usePotion() {
    if (this.potions > 0) {
      this.potions--;
      this.potionsUsed++;
      this.foodLevel = 10;
      this.sleep = 10;
      this.happiness = 10;
    }
  }

  useCandy() {
    if (this.candies > 0) {
      this.candies--;
      this.candiesUsed++;
      this.level++;
    }
  }

  checkCurrentLevel() {
    setInterval (() => {
      if (this.level === 10) {
        this.firstEvolved = true;
      } else if (this.level === 20) {
        this.secondEvolved = true;
      }
    }, 500);
  }
}
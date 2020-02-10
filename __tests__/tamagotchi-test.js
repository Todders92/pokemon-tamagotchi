import { Tamagotchi } from '../src/tamagotchi.js';

describe('Tamagotchi', () => {
  jest.useFakeTimers();
  let tamagotchi;
  beforeEach(() => {
    tamagotchi = new Tamagotchi();
  });
  afterEach(() => {
    jest.clearAllTimers();
  })
  test('should correctly create a Tamagotchi object with 100% food, happiness, and sleep levels', () => {
    expect(tamagotchi.name).toEqual("");
    expect(tamagotchi.sleep).toBe(10);
    expect(tamagotchi.happiness).toBe(10);
    expect(tamagotchi.foodLevel).toBe(10);
  });

  test('should check that food level is decremented every minute', () => {
    tamagotchi.getHungry();
    jest.advanceTimersByTime(1000 * 60 + 1);
    expect(tamagotchi.foodLevel).toBe(9);
  })
});
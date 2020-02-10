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
  });

  test('should decrement sleep level after every 30min', () => {
    tamagotchi.getTired();
    jest.advanceTimersByTime(1000 * 60 * 30 + 1);
    expect(tamagotchi.sleep).toBe(9);
  });

  test('should check that happiness is decremented every hour', () => {
    tamagotchi.getSad();
    jest.advanceTimersByTime(1000 * 60 * 60 + 1);
    expect(tamagotchi.happiness).toBe(8);
  });

  test('should refill tamagotchi food level', () => {
    tamagotchi.getHungry();
    jest.advanceTimersByTime(1000 * 60 + 1);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toBe(10);
  });

  test('should refill tamagotchi sleep level', () => {
    tamagotchi.getTired();
    jest.advanceTimersByTime(1000 * 60 * 30 + 1);
    tamagotchi.bedTime();
    expect(tamagotchi.sleep).toBe(10);
  });

  test('should stay asleep for 30min', () => {
    tamagotchi.bedTime();
    expect(tamagotchi.busy).toBe(true);
    jest.advanceTimersByTime(1000*60*30 +1);
    expect(tamagotchi.busy).toBe(false);
  });
});
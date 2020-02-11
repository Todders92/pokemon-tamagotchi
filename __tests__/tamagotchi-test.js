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

  test('should check that food level is decremented every second', () => {
    tamagotchi.getHungry();
    jest.advanceTimersByTime(1000 + 1);
    expect(tamagotchi.foodLevel).toBe(9);
  });

  test('should decrement sleep level after every second', () => {
    tamagotchi.getTired();
    jest.advanceTimersByTime(1000 + 1);
    expect(tamagotchi.sleep).toBe(9);
  });

  test('should check that happiness is decremented every second', () => {
    tamagotchi.getSad();
    jest.advanceTimersByTime(1000*2 + 1);
    expect(tamagotchi.happiness).toBe(8);
  });

  test('should refill tamagotchi food level', () => {
    tamagotchi.getHungry();
    jest.advanceTimersByTime(1000 + 1);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toBe(10);
  });

  test('should stay busy for 2 seconds after feeding', () => {
    tamagotchi.feed();
    expect(tamagotchi.busy).toBe(true);
    jest.advanceTimersByTime(1000*2 +1);
    expect(tamagotchi.busy).toBe(false);
  });

  test('should refill tamagotchi sleep level', () => {
    tamagotchi.getTired();
    jest.advanceTimersByTime(1000 + 1);
    tamagotchi.bedTime();
    expect(tamagotchi.sleep).toBe(10);
  });

  test('should stay asleep for 2 seconds', () => {
    tamagotchi.bedTime();
    expect(tamagotchi.busy).toBe(true);
    jest.advanceTimersByTime(1000*2 +1);
    expect(tamagotchi.busy).toBe(false);
  });

  test('should check that play() refills happiness', () => {
    tamagotchi.getSad();
    jest.advanceTimersByTime(1000 + 1);
    tamagotchi.play();
    expect(tamagotchi.happiness).toBe(10);
  });

  test('should check whether tamagotchi is busy for 2 seconds after playing', () => {
    tamagotchi.play();
    expect(tamagotchi.busy).toBe(true);
    jest.advanceTimersByTime(1000*2 +1);
    expect(tamagotchi.busy).toBe(false);
  });

  test('should prevent feed methods from triggering if busy', () => {
    tamagotchi.getHungry();
    jest.advanceTimersByTime(1000 + 1);
    tamagotchi.bedTime();
    tamagotchi.feed();
    expect(tamagotchi.busy).toBe(true);
    expect(tamagotchi.foodLevel).toBe(9);
    jest.advanceTimersByTime(1000*2 +1);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toBe(10);
  });

  test('should prevent bedtime method from triggering if busy', () => {
    tamagotchi.getTired();
    jest.advanceTimersByTime(1000 +1);
    tamagotchi.feed();
    tamagotchi.bedTime();
    expect(tamagotchi.busy).toBe(true);
    expect(tamagotchi.sleep).toBe(9);
    jest.advanceTimersByTime(1000*2 +1);
    tamagotchi.bedTime();
    expect(tamagotchi.sleep).toBe(10);
  });

  test('should prevent play method from triggering if busy', () => {
    tamagotchi.getSad();
    jest.advanceTimersByTime(1000*2 +1);
    tamagotchi.bedTime();
    tamagotchi.play();
    expect(tamagotchi.busy).toBe(true);
    expect(tamagotchi.happiness).toBe(8);
    jest.advanceTimersByTime(1000*2 +1);
    tamagotchi.play();
    expect(tamagotchi.happiness).toBe(10);
  });

  test('should kill tamagotchi when two of three status bars are 0', () => {
    tamagotchi.getHungry();
    tamagotchi.getSad();
    jest.advanceTimersByTime(1000*10 +1);
    tamagotchi.checkAlive();
    jest.advanceTimersByTime(500 +1);
    expect(tamagotchi.alive).toBe(false);
  });

  test('should check that user cannot feed, play with, or rest tamagotchi after it dies', () => {
    tamagotchi.getHungry();
    tamagotchi.getSad();
    jest.advanceTimersByTime(1000*10 +1);
    tamagotchi.checkAlive();
    jest.advanceTimersByTime(500 +1);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toBe(0);
  });
});
import { Tamagotchi } from '../src/tamagotchi.js';

describe('Tamagotchi', () => {
  let tamagotchi;
  beforeEach(() => {
    tamagotchi = new Tamagotchi();
  });
  test('should correctly create a Tamagotchi object with zero food, happiness, and sleep levels', () => {
    expect(tamagotchi.name).toEqual("");
    expect(tamagotchi.sleep).toBe(0);
    expect(tamagotchi.happiness).toBe(0);
    expect(tamagotchi.foodLevel).toBe(0);
  });

  // test('should instantiate a Tama')
});
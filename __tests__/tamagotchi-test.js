import { Tamagotchi } from '../src/tamagotchi.js'

describe('Tamagotchi', () => {
  let tamagotchi;
  beforeEach(() => {
    tamagotchi = new Tamagotchi();
  });
  test('should correctly create a Tamagotchi object', () => {
    expect(tamagotchi.name).toEqual("");
  });
});
import { isFizz, isBuzz } from './helpers'

describe('FizzBuzz helpers', () => {
  describe('isFizz()', () => {
    it('should return true if param is divisible by 3', async () => {
      const param = 3;
      const result = isFizz(param);
      expect(result).toBe(true);
    });

    it('should return false if param is not divisible by 3', async () => {
      const param = 4;
      const result = isFizz(param);
      expect(result).toBe(false);
    });
  });

  describe('isBuzz()', () => {
    it('should return true if param is divisible by 5', async () => {
      const param = 5;
      const result = isBuzz(param);
      expect(result).toBe(true);
    });

    it('should return false if param is not divisible by 5', async () => {
      const param = 6;
      const result = isBuzz(param);
      expect(result).toBe(false);
    });
  });
});
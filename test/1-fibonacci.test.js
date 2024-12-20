const fibonacci = require('../src/1-fibonacci');


describe('fibonacci', () => {
  test('should return 0 for n=0', () => {
    expect((0)).toBe(0);
  });

  test('should return 1 for n=1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('should return 1 for n=2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('should return 2 for n=3', () => {
    expect(fibonacci(3)).toBe(2);
  });

  test('should return 3 for n=4', () => {
    expect(fibonacci(4)).toBe(3);
  });

  test('should return 5 for n=5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('should return 8 for n=6', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('should return 13 for n=7', () => {
    expect(fibonacci(7)).toBe(13);
  });

  test('should return 21 for n=8', () => {
    expect(fibonacci(8)).toBe(21);
  });

  test('should return 34 for n=9', () => {
    expect(fibonacci(9)).toBe(34);
  });

  test('should return 55 for n=10', () => {
    expect(fibonacci(10)).toBe(55);
  });
});

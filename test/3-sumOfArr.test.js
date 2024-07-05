const sumArray = require('../src/3-sumOfArr')

// Tests for sumArray function
describe('sumArray', () => {
  it('should return 0 for an empty array', () => {
    expect(sumArray([])).toBe(0)
  })

  it('should return the sum of array elements', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15)
    expect(sumArray([10, 20, 30])).toBe(60)
    expect(sumArray([1, -1, 1, -1])).toBe(0)
  })
})

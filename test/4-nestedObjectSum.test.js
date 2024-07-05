const nestedObjectSum = require("../src/4-nestedObjectSum")



describe('nestedObjectSum', () => {
  it('should return 0 for an empty object', () => {
    expect(nestedObjectSum({})).toBe(0)
  })

  it('should return the sum of all numbers in a flat object', () => {
    expect(nestedObjectSum({ a: 1, b: 2, c: 3 })).toBe(6)
  })

  it('should return the sum of all numbers in a nested object', () => {
    const nestedObj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      },
      f: 4
    }
    expect(nestedObjectSum(nestedObj)).toBe(10)
  })

  it('should return the sum of all numbers in a complex nested object', () => {
    const complexObj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: {
            g: 4
          }
        }
      },
      h: 5,
      i: {
        j: {
          k: 6
        }
      }
    }
    expect(nestedObjectSum(complexObj)).toBe(21)
  })
})

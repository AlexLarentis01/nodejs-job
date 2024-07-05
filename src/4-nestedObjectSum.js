function nestedObjectSum (obj) {
  let sum = 0

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key]
    } else if (typeof obj[key] === 'object') {
      sum += nestedObjectSum(obj[key])
    }
  }

  return sum
}

// Example usage
const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
}

module.exports = nestedObjectSum

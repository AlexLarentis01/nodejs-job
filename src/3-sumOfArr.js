function sumArray (arr) {
  // Base case
  if (arr.length === 0) return 0

  // Recursive case
  return arr[0] + sumArray(arr.slice(1))
}

module.exports  = sumArray
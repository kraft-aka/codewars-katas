// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  return array.reduce((max, n) =>
    String(n).length > String(max).length ? n : max
  );
}

// Find the sum of the odd numbers within an array, after cubing the initial integers.
// The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  return arr.some((i) => typeof i != "number")
    ? undefined
    : arr
        .filter((i) => i % 2 !== 0)
        .map((i) => i ** 3)
        .reduce((a, b) => a + b, 0);
}

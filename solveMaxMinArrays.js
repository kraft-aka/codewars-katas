// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]

function solve(arr) {
  let sorted = arr.slice().sort((a, b) => a - b);
  const maxMin = [];

  let l = 0;
  let r = sorted.length - 1;

  while (l < r) {
    maxMin.push(sorted[r--], sorted[l++]);
    if (l === r) {
      maxMin.push(sorted[l]);
    }
  }
  return maxMin;
}

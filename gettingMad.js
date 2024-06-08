// Task
// Given an array of integers with at least 2 elements: a1, a2, a3, a4, ... aN

// The absolute difference between two array elements ai and aj, where i != j,
// is the absolute value of ai - aj.

// Return the minimum absolute difference (MAD) between any two elements in the array.

// Example
// For [-10, 0, -3, 1]

function gettingMad(array) {
  array.sort((a, b) => a - b);
  let min = Math.abs(array[1]) - array[0];

  for (let i = 0; i < array.length; i++) {
    let diff = Math.abs(array[i] - array[i - 1]);
    if (diff < min) {
      min = diff;
    }
  }
  return min;
}

console.log(gettingMad([12, 545, 123, 45, 8, 0, 146]));

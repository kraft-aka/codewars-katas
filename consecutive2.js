// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

// [1] --> 0
// []  --> 0

function consecutive(array) {
  if (!array.length) return 0;

  const smallest = Math.min(...array);
  const largest = Math.max(...array);
  const totalItems = largest - smallest + 1;

  return totalItems - array.length;
}

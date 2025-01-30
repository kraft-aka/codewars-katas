// Every Friday and Saturday night, farmer counts sheep coming back to his farm (sheep returned on Friday stay and don't leave).

// Sheep return in groups both of the days -> You will be given two arrays with these numbers (one for Friday and one for Saturday night). Array entries are integers, equal zero or higher - in case a given array is empty, farmer did not count the sheep or got sick (we treat this as no sheep returned that night).

// Farmer knows how many sheep he has in total (third parameter). You need to calculate the amount of sheep lost (not returned to the farm) after final sheep count on Saturday.

// Example 1: Input: [1, 2], [3, 4], 15 --> Output: 5

// Example 2: Input: [3, 1, 2], [4, 5], 21 --> Output: 6

// Example 3: Input: [0], [4, 15], 31 --> Output: 12

// Example 4: Input: [], [4], 15 --> Output: 11

// Good luck! :-)

function lostSheep(friday, saturday, total) {
  const f = friday.reduce((a, b) => a + b, 0);
  const s = saturday.reduce((a, b) => a + b, 0);
  return total - (f + s);
}

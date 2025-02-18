// Input
// a string strng of n positive numbers (n = 0 or n >= 2)
// Let us call weight of a number the sum of its digits. For example 99 will have "weight" 18, 100 will have "weight" 1.

// Two numbers are "close" if the difference of their weights is small.

// Task:
// For each number in strng calculate its "weight" and then find two numbers of strng that have:

// the smallest difference of weights ie that are the closest
// with the smallest weights
// and with the smallest indices (or ranks, numbered from 0) in strng
// Output:
// an array of two arrays, each subarray in the following format:
// [number-weight, index in strng of the corresponding number, original corresponding number in strng]

// or a pair of two subarrays (Haskell, Clojure, FSharp) or an array of tuples (Elixir, C++)

// or a (char*) in C or a string in some other languages mimicking an array of two subarrays or a string

// or a matrix in R (2 rows, 3 columns, no columns names)

// The two subarrays are sorted in ascending order by their number weights if these weights are different, by their indexes in the string if they have the same weights.

// Examples:
// Let us call that function closest

// strng = "103 123 4444 99 2000"
// the weights are 4, 6, 16, 18, 2 (ie 2, 4, 6, 16, 18)

// closest should return [[2, 4, 2000], [4, 0, 103]] (or ([2, 4, 2000], [4, 0, 103])
// or [{2, 4, 2000}, {4, 0, 103}] or ... depending on the language)
// because 2000 and 103 have for weight 2 and 4, their indexes in strng are 4 and 0.
// The smallest difference is 2.
// 4 (for 103) and 6 (for 123) have a difference of 2 too but they are not
// the smallest ones with a difference of 2 between their weights.

function closest(str) {
  if (!str) return [];
  const numsArr = str.split(" ");
  const weights = numsArr.map((i) =>
    i.split("").reduce((acc, val) => acc + +val, 0)
  );
  const data = numsArr.map((val, i) => [].concat(weights[i], i, +val));
  const res = data.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  let minDiff = Infinity;
  let closePair = [];

  for (let i = 0; i < res.length - 1; i++) {
    let numDiff = res[i + 1][0] - res[i][0];
    if (numDiff < minDiff) {
      minDiff = numDiff;
      closePair = [res[i], res[i + 1]];
    }
  }
  return closePair;
}

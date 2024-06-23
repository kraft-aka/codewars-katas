// As part of this kata, you need to find the length of the sub-array that begins and
// ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of
// the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the
// supplied array.

// If there are less or more than two occurrences of the number to search for,
// return 0.

var lengthOfSequence = function (arr, n) {
  const first = arr.indexOf(n);
  const last = arr.lastIndexOf(n);
  if (
    arr.filter((i) => i == n).length > 2 ||
    arr.filter((i) => i == n).length <= 1
  ) {
    return 0;
  } else {
    return arr.length > 2 ? arr.slice(first, last + 1).length : arr.length;
  }
};

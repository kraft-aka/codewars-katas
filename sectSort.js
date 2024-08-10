// In this kata you are given an array to sort but you're expected to start sorting from a specific position of the array (in ascending order)
// and optionally you're given the number of items to sort.

// Examples:
// sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5) //=> [9, 7, 1, 2, 3, 4, 5, 8, 6]
// Documentation:
// sectSort(array, start, length);
// array - array to sort
// start - position to begin sorting
// length - number of items to sort (optional)
// if the length argument is not passed or is zero, you sort all items to the right of the start position in the array

function sectSort() {
  const arrHead = arguments[0].slice(0, arguments[1]);
  const arrTail = arguments[0].slice(arguments[1]);
  const numsToSort = arrTail.slice(0, arguments[2]);

  if (!arguments[2]) {
    return [].concat(
      arrHead,
      arrTail.sort((a, b) => a - b)
    );
  } else {
    return [].concat(
      arrHead,
      numsToSort.sort((a, b) => a - b),
      arrTail.slice(arguments[2])
    );
  }
}

// You need to swap the head and the tail of the specified array:

// the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists)
// leaves on the same position.

// Return new array.

// For example:

//    [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
//     \----/   \----/
//      head     tail

//    [ -1, 2 ]  => [ 2, -1 ]
//    [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]

function swapHeadAndTail(arr) {
  if (arr.length === 1) return arr;

  const half = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    const head = arr.slice(0, half);
    const tail = arr.slice(half);
    return tail.concat(head);
  } else {
    const head = arr.slice(0, half);
    const middle = arr[half];
    const tail = arr.slice(half + 1);
    return [].concat(tail, middle, head);
  }
}

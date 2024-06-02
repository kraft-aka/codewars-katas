// In this task, you need to write a function each, that takes an integer number n and a ( possibly empty ) list of integers,
// and returns a list of every nth element of the input list ( which possibly is the empty list ).

// If n < 0, count by abs n from the end of the list.
// If n == 0, return an empty list.

// Examples
// each 0 [1,2,3,4,5,6] = []
// each 1 [1,2,3,4,5,6] = [1,2,3,4,5,6]
// each (-1) [1,2,3,4,5,6] = [6,5,4,3,2,1]
// each 2 [1,2,3,4,5,6] = [2,4,6]
// each (-2) [1,2,3,4,5,6] = [5,3,1]
// each 3 [1,2] = []
// each (-3) [1,2] = []
// each 5 [1,2,3,4,5,6,7] = [5]
// each (-5) [1,2,3,4,5,6,7] = [3]

function each(n, xs) {
  if (n === 0) return [];
  let res = [];

  if (n > 0) {
    for (let i = n - 1; i < xs.length; i += n) {
      res.push(xs[i]);
    }
  } else {
    n = Math.abs(n);
    for (let i = xs.length - n; i >= 0; i -= n) {
      res.push(xs[i]);
    }
  }
  return res;
}

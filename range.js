// Create range generator function that will take up to 3 parameters - start value, step and stop value.
// This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

// Examples:

// range(5) --> 1,2,3,4,5
// range(3, 7) --> 3,4,5,6,7
// range(2, 3, 15) --> 2,5,8,11,14

function range(...args) {
  let rangeNums = [];
  if (args.length == 1) {
    for (let i = 1; i <= args[0]; i++) {
      rangeNums.push(i);
    }
  } else if (args.length == 2) {
    let first = args[0];
    let end = args[1];
    for (let i = first; i <= end; i++) {
      rangeNums.push(i);
    }
  } else {
    let first = args[0];
    let step = args[1];
    let end = args[2];
    for (let i = first; i <= end; i += step) {
      rangeNums.push(i);
    }
  }
  return rangeNums;
}

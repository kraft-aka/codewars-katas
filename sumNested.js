//Sum of a nested list

const sumNested = (arr) =>
  arr.flat(Infinity).reduce((acc, val) => acc + val, 0);

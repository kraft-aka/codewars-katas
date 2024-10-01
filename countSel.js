// We need a function that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented below:

// [(1), (2), (3), [[(4)], 5]]

// (1) - Total amount of received integers.

// (2) - Total amount of different values the array has.

// (3) - Total amount of values that occur only once.

// (4) and (5) both in a list

// (4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)

// (5) - Maximum occurrence of the integer(s)

// Let's see some cases:

// for list [-3, -2, -1, 3, 4, -5, -5, 5, -1, -5] ----> [10, 7, 5, [[-5], 3]]

// (1) - The list has ten elements (10 numbers)

// (2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)

// (3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)

// (4) and (5) - The number -5 occurs three times (3 occurrences)

function countSel(array) {
  const total = array.length;
  const diffVal = [...new Set(array)].length;
  const unique = array.filter(
    (i) => array.indexOf(i) === array.lastIndexOf(i)
  ).length;
  const obj = array.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  const maxValue = Math.max(...Object.values(obj));
  const maxEl = Object.keys(obj)
    .filter((k) => obj[k] === maxValue)
    .map(Number)
    .sort((a, b) => a - b);
  return [total, diffVal, unique, [maxEl, maxValue]];
}

// Given an array with exactly 5 strings "a", "b" or "c"
// (chars in Java, characters in Fortran), check if the array contains
// three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
  let countA = 0;
  let countB = 0;
  let countC = 0;

  array.forEach((i) => {
    if (i === "a") {
      countA++;
    } else if (i === "b") {
      countB++;
    } else {
      countC++;
    }
  });

  return (
    (countA === 3 && countB === 2) ||
    (countA === 3 && countC === 2) ||
    (countB === 3 && countA === 2) ||
    (countB === 3 && countC === 2) ||
    (countC === 3 && countA === 2) ||
    (countC === 3 && countB === 2)
  );
}

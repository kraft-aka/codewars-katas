// Given an integer, return a string with dash '-' marks before and after each
// odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  let numToArr = Math.abs(num).toString().split("");
  let res = [];
  let last = numToArr[numToArr.length - 1];
  for (let i = 0; i < numToArr.length; i++) {
    if (numToArr[i] % 2 != 0 && numToArr[i + 1] % 2 == 0) {
      res.push("-", numToArr[i], "-");
    } else if (
      numToArr[i] % 2 != 0 &&
      numToArr[i + 1] % 2 != 0 &&
      numToArr[i] == last
    ) {
      res.push("-", numToArr[i]);
    } else if (numToArr[i] % 2 != 0 && numToArr[i + 1] % 2 != 0) {
      res.push("-", numToArr[i]);
    } else {
      res.push(numToArr[i]);
    }
  }
  return res.join("").startsWith("-") ? res.join("").slice(1) : res.join("");
}

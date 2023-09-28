// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-')
// between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  const str = num.toString();
  let res = str[0];
  for (let i = 1; i < str.length; i++) {
    const previouseNumber = str[i - 1];
    const currentNumber = str[i];
    if (previouseNumber === 0 || currentNumber === 0) {
      res += currentNumber;
    } else if (previouseNumber % 2 !== 0 && currentNumber % 2 !== 0) {
      res += "-" + currentNumber;
    } else {
      res += currentNumber;
    }
  }
  return res;
}

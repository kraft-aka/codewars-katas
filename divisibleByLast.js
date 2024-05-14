// Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

// The booleans should always start with false becase there is no digit before the first one.

// Examples
// 73312        => [false, false, true, false, true]
// 2026         => [false, true, false, true]
// 635          => [false, false, false]

function divisibleByLast(n) {
  let res = [];
  let arr = n
    .toString()
    .split("")
    .map((i) => +i);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % arr[i - 1] === 0) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
}

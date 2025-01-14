// This is a follow up from my kata Insert Dashes.

// Write a function that takes a non-negative integer, insert dashes ('-') between each two odd digits and insert asterisks ('*') between each two nonzero even digits.

// For example:

// 454793 --> "4547-9-3"
// 1012356895 --> "10123-56*89-5"
// Note: Digit zero ('0') is not considered when inserting dashes or asterisks

function insertDashII(num) {
  let arr = num.toString();
  let res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    res.push(arr[i]);
    if (
      arr[i] !== "0" &&
      arr[i + 1] !== "0" &&
      arr[i] % 2 === 0 &&
      arr[i + 1] % 2 === 0
    ) {
      res.push("*");
    } else if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      res.push("-");
    }
  }
  res.push(arr[arr.length - 1]);
  return res.join("");
}

// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"

function insertDash(num) {
  let res = "";
  let str = num.toString();
  for (let i = 0; i < str.length - 1; i++) {
    res += str[i];
    if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      res += "-";
    }
  }
  res += str[str.length - 1];
  return res;
}

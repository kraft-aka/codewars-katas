// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  let reversedStr = n.toString().split("").reverse().join("");
  if (reversedStr.endsWith("-")) {
    const res = Number("-" + reversedStr.slice(0, -1));
    return res;
  } else {
    return Number(reversedStr.replace(/^0+/, ""));
  }
}

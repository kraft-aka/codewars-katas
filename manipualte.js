// For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

// In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

// Example:

// 192827764920 --> 192827000000

// 938473 --> 938000

// 2837743 --> 2830000

function manipulate(num) {
  let str = num.toString();
  return str.length % 2 === 0
    ? Number(str.substring(0, str.length / 2) + "0".repeat(str.length / 2))
    : Number(str.substring(0, str.length / 2) + "0".repeat(str.length / 2 + 1));
}

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits() {
  const args = [...arguments];
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const str = args.map(String).join("").split("");
  return nums
    .filter((i) => !str.includes(i))
    .sort()
    .join("");
}

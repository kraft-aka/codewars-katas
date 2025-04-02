// Given a string of characters, create a function returning the middle number in the product of each digit in the string.

// Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

// Not all strings will contain digits and not all inputs will be string. In those cases, return -1.

// If the product has an even number of digits, return the middle two digits

// Example: 1563 -> 56

// NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1

function findMiddle(str) {
  if (typeof str !== "string" || str.replace(/[^0-9]/g, "").length === 0) {
    return -1;
  }
  let nums = str
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((a, b) => a * +b, 1)
    .toString();
  let mid = Math.floor(nums.length / 2);
  let res =
    nums.length % 2 !== 0
      ? nums[mid]
      : nums.slice(mid - 1, mid + 1).replace(/^0/, "");
  return Number(res);
}

function palindrome(num) {
  return typeof num === "number" && num > 0
    ? Number([...String(num)].reverse().join("")) === num
    : "Not valid";
}

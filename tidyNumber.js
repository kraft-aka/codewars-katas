// A Tidy number is a number whose digits are in non-decreasing order.

// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2

function tidyNumber(n) {
  if (n < 10) return true;
  let arr = n.toString().split("");
  for (let i = 0; i < arr.length - 1; i++) {
    if (+arr[i] > +arr[i + 1]) {
      return false;
    }
  }
  return true;
}

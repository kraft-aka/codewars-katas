// Your job is to implement a function which returns the last D digits of an integer 
// N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.

function lastDigit(n, d) {
  return d <= 0 ? [] : Array.from(n.toString().slice(-d), Number)
 }


 console.log(lastDigit(123456, 3))
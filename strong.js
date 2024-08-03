// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

// Examples
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

function strong(n) {
  let arr = n
    .toString()
    .split("")
    .map((i) => +i);

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  return arr.map((i) => factorial(i)).reduce((a, b) => a + b, 0) === n
    ? "STRONG!!!!"
    : "Not Strong !!";
}

// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

function numbersWithDigitInside(x, d) {
  let count = 0;
  let sum = 0;
  let product = [];

  for (let i = 1; i <= x; i++) {
    if (String(i).includes(d + "")) {
      count++;
      sum += i;
      product.push(i);
    }
  }
  let res = product.length ? product.reduce((a, b) => a * b, 1) : 0;

  return [count, sum, res];
}

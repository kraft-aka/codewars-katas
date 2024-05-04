// Given a sequence of integers, return the sum of all the integers that have
// an even index (odd index in COBOL), multiplied by the integer at the last
// index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  let res = [];
  if (numbers.length === 0) return 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      res.push(numbers[i]);
    }
  }
  let last = numbers[numbers.length - 1];
  let sum = res.reduce((a, b) => a + b, 0);
  return sum * last;
}

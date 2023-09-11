// The Hamming weight of a string is the number of symbols that are different
// from the zero-symbol of the alphabet used. There are several algorithms for
// efficient computing of the Hamming weight for numbers. In this Kata, speaking
// technically, you have to find out the number of '1' bits in a binary
// representation of a number. Thus,

// hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3
// The interesting part of this task is that you have to do it without string
// operation (hey, it's not really interesting otherwise)

// ;)

function hammingWeight(x) {
  let number = x;
  let result = [];
  while (number >= 1) {
    result.unshift(Math.floor(number % 2));
    number = number / 2;
  }
  return result.filter((i) => i === 1).length;
}

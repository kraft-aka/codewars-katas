// Given a string made of digits [0-9], return a string where each
// digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

const explode = (s) =>
  s
    .split("")
    .map((i) => i.repeat(+i))
    .join("");

console.log(explode("0011122223"));

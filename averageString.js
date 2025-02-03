// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

function averageString(str) {
  if (!str.length) return "n/a";
  const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };

  const numToStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const arr = str.split(" ");
  const values = arr.map((i) => numbers[i]);
  if (values.includes(undefined)) return "n/a";
  const avg = Math.floor(
    values.reduce((acc, val) => acc + val, 0) / arr.length
  );
  return numToStr[avg];
}

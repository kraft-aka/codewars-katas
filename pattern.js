// // Complete The Pattern #6 - Odd Ladder
// You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.

// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

// If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.

// ###Examples:

// pattern(9):

// 1
// 333
// 55555
// 7777777
// 999999999

function pattern(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      let str = "";
      for (let j = 1; j <= i; j++) {
        str += i;
      }
      output += str + "\n";
    }
  }
  return output.trimEnd();
}

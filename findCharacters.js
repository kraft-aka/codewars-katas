// Give you a character matrix. Find out the character which has the smallest amount.

// Arguments:
// matrix: A string that contains some letters. Each row is separated by "\n".
// Results & Note:
// Returns the characters which has smallest amount, using string format.
// If more than one characters are found, sort them according to the order A-Za-z0-9.
// You can assume that there are at least two characters in the matrix.
// Please ignore the "\n" ;-)
// Some Examples
// matrix=
// 00000000
// 0000O000
// 00000000
// 00000000
// 00000000

// result -> "O"
// matrix=
// mmmmmmmmmmmmm
// mmmmmmmmmmmmm
// mmmmmmmmmmmmm
// mmmmmmmmmnmmm

// result -> "n"

function findCharacters(matrix) {
  let chars = {};

  matrix
    .replace(/\n|\r/g, "")
    .split("")
    .forEach((el) => {
      if (chars[el]) {
        chars[el] += 1;
      } else {
        chars[el] = 1;
      }
    });

  const min = Math.min(...Object.values(chars));

  let res = Object.keys(chars).filter((k) => chars[k] === min);
  const str = res
    .filter((i) => isNaN(i))
    .sort()
    .join("");
  const num = res
    .filter((i) => !isNaN(i))
    .sort((a, b) => a - b)
    .join("");
  return str.concat(num);
}

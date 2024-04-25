// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not
// common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.

function solve(a, b) {
  const a2 = [...a].filter((i) => ![...b].includes(i)).join("");
  const b2 = [...b].filter((i) => ![...a].includes(i)).join("");
  return a2.concat(b2);
}

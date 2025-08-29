// Exes and Ohs
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let x = 0;
  let o = 0;

  str = str.toLowerCase();
  for (let char of str) {
    if (char === "x") {
      x++;
    } else if (char === "o") {
      o++;
    }
  }
  return x === o;
}

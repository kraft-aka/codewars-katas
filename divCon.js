// Given a mixed array of number and string representations of integers,
// add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  let int = 0;
  let str = 0;

  for (let i in x) {
    if (typeof x[i] === "number") {
      int += x[i];
    } else {
      str += Number(x[i]);
    }
  }
  return int - str;
}

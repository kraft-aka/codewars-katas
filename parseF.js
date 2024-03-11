// Write function parseF which takes an input and returns a number or null if conversion is not possible.
// The input can be one of many different types so be aware.

function parseF(s) {
  const regExp = new RegExp(/[0-9]/);
  return regExp.test(s) ? parseFloat(s) : null;
}

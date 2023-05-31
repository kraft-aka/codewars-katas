// Complete the solution so that the function will break up camel casing,
// using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      str += " " + string[i];
    } else {
      str += string[i];
    }
  }
  return str;
}

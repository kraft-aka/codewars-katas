// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.

function removeParentheses(s) {
  let res = "";
  let par = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      par--;
    } else if (char === ")") {
      par++;
    } else if (par === 0) {
      res += char;
    }
  }
  return res;
}

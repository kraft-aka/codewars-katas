// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value) {
  const str = String(value);
  if (str.length === 1) return `Value is ${str.padStart(5, "0")}`;
  if (str.length === 2) return `Value is ${str.padStart(5, "0")}`;
  if (str.length === 3) return `Value is ${str.padStart(5, "0")}`;
  if (str.length === 4) return `Value is ${"0" + str}`;
  if (str.length >= 5) return `Value is ${str}`;
}

// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

// Example:
// calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"

function calcType(a, b, res) {
  if (a + b === res) {
    return "addition";
  } else if (a - b === res) {
    return "subtraction";
  } else if (a * b === res) {
    return "multiplication";
  } else {
    return "division";
  }
}

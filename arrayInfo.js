// Brief
// Sometimes we need information about the list/arrays we're dealing with. You'll have to write such a function in this kata. Your function must provide the following informations:

// Length of the array
// Number of integer items in the array
// Number of float items in the array
// Number of string character items in the array
// Number of whitespace items in the array
// The informations will be supplied in arrays that are items of another array. Like below:

// Output array = [[array length],[no of integer items],[no of float items],[no of string chars items],[no of whitespace items]]

function arrayInfo(arr) {
  let len = [arr.length],
    int = null,
    float = null,
    str = null,
    space = null;

  if (!arr.length) return "Nothing in the array!";

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i] !== " ") {
      str++;
    } else if (typeof arr[i] === "object") {
      continue;
    } else if (Number.isInteger(arr[i])) {
      int++;
    } else if (arr[i] - parseInt(arr[i])) {
      float++;
    } else if (/\s/.test(arr[i])) {
      space++;
    }
  }
  return [len, [int], [float], [str], [space]];
}

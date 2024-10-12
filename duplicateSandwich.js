// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.

// Examples:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"
// Notes
// All elements will be the same datatype.
// All used elements will be primitive.

function duplicateSandwich(a) {
  if (!a) {
    return [];
  }

  const arr = Array.isArray(a) ? a : [...a];
  const doubles = arr.filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i));

  const one = arr.indexOf(doubles[0]);
  const two = arr.lastIndexOf(doubles[1]);
  const res = arr.slice(one + 1, two);

  return Array.isArray(a) ? res : res.join("");
}

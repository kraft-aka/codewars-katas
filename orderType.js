// Write a function that takes a single array as an argument (containing multiple strings and/or positive numbers and/or arrays), and returns one of four possible string values, depending on the ordering of the lengths of the elements in the input array:

// Your function should return...

// “Increasing” - if the lengths of the elements increase from left to right (although it is possible that some neighbouring elements may also be equal in length)
// “Decreasing” - if the lengths of the elements decrease from left to right (although it is possible that some neighbouring elements may also be equal in length)
// “Unsorted” - if the lengths of the elements fluctuate from left to right
// “Constant” - if all element's lengths are the same.
// Numbers and Strings should be evaluated based on the number of characters or digits used to write them.

// Arrays should be evaluated based on the number of elements counted directly in the parent array (but not the number of elements contained in any sub-arrays).

// Happy coding! :)

function orderType(arr) {
  let increasing = true;
  let decreasing = true;

  const transformedValues = arr.map((i) => {
    if (typeof i === "string") {
      return i.length;
    } else if (typeof i === "number") {
      return String(i).length;
    } else if (Array.isArray(i)) {
      return i.length;
    } else {
      return 0;
    }
  });

  for (let i = 1; i < transformedValues.length; i++) {
    if (transformedValues[i] > transformedValues[i - 1]) {
      decreasing = false;
    } else if (transformedValues[i] < transformedValues[i - 1]) {
      increasing = false;
    }
  }

  if (transformedValues.every((val, _, arr) => val === arr[0]))
    return "Constant";
  if (decreasing) return "Decreasing";
  if (increasing) return "Increasing";
  return "Unsorted";
}

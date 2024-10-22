// Write a function that takes two array arguments, and returns a new array populated with the elements that appear in either array, but not in both. Elements should only appear once in the returned array.

// The order of the elements in the result should follow what appears in the first array, then the second one.

// Examples
// [1, 2, 3, 3], [3, 2, 1, 4, 5] --> [4, 5]

// ["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"] --> ["tartar", "domino"]

// [77, "ciao"], [78, 42, "ciao"] --> [77, 78, 42]

// [1, 2, 3, 3], [3, 2, 1, 4, 5, 4] --> [4,5]

// [1, 2, 3] , [3, 3, 2, 1] --> []

function hotSingles(arr1, arr2) {
  if (!arr2.length) return [...new Set(arr1)];
  if (!arr1.length) return [...new Set(arr2)];
  const itemsOne = [...new Set(arr1)].filter((i) => !arr2.includes(i));
  const itemsTwo = [...new Set(arr2)].filter((i) => !arr1.includes(i));
  return [...itemsOne, ...itemsTwo];
}

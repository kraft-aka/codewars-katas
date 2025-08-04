// Simple Fun #256: Two Arrays Nth Element

function twoArraysNthElement(arr1, arr2, n) {
  return [...arr1, ...arr2].sort((a, b) => a - b)[n];
}

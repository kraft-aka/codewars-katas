// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
// that checks whether the two arrays have the "same" elements, with the
// same multiplicities (the multiplicity of a member is the number of times
// it appears). "Same" means, here, that the elements in b are the elements
// in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  arr2.sort((a, b) => a - b);
  return arr1.sort((a, b) => a - b).every((val, i) => val ** 2 === arr2[i]);
}

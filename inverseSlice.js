// You're familiar with list slicing in Python and know, for example, that:

// >>> ages = [12, 14, 63, 72, 55, 24]
// >>> ages[2:4]
// [63, 72]
// >>> ages[2:]
// [63, 72, 55, 24]
// >>> ages[:3]
// [12, 14, 63]
// Write a function inverse_slice that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded.

// For example:

// >>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
// [12, 14, 55, 24]
// Input domain:

// items will always be a valid sequence.
// b will always be greater than a.
// a will always be greater than or equal to zero.
// a will always be less than the length of items.
// b may be greater than the length of items.

function inverseSlice(items, a, b) {
  items.splice(a, b - a);
  return items;
}

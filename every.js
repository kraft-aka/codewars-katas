// Create a method (JS: function) every which returns every nth element of an array.

// Usage
// With no arguments, array.every it returns every element of the array.
// With one argument, array.every(interval) it returns every intervalth element.
// With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index

// Note: due to fact JS translation ask for a function instead of an Array method the above uses will be :

// javascript:                          ruby:
// every(array)                         array.every
// every(array, interval)               array.every(interval)
// every(array, interval, start_index)  array.every(interval, start_index)
// Examples
// every([0,1,2,3,4])     // [0,1,2,3,4]
// every([0,1,2,3,4],1)   // [0,1,2,3,4]
// every([0,1,2,3,4],2)   // [0,2,4]
// every([0,1,2,3,4],3)   // [0,3]
// every([0,1,2,3,4],3,1) // [1,4]

function every(arr, interval, start) {
  let result = [];

  if (!interval && !start) {
    return arr;
  } else if (arr && interval && !start) {
    for (let i = 0; i < arr.length; i += interval) {
      result.push(arr[i]);
    }
  } else {
    for (let i = start; i < arr.length; i += interval) {
      result.push(arr[i]);
    }
  }
  return result;
}

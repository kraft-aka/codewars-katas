// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n,
// your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

function sumOfMinimums(arr) {
  // solution with for loop

  //  let minValue = [];
  //  for (let i = 0; i < arr.length; i++) {
  //      let current = Math.min.apply(null,arr[i]);
  //      minValue.push(current);
  //  }
  //  return minValue.reduce((a,b)=> a+b,0);

  return arr.map((i) => Math.min.apply(null, i)).reduce((a, b) => a + b, 0);
}

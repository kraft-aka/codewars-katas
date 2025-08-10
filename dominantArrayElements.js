// Dominant array elements

function solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Math.max(...arr.slice(i + 1))) {
      res.push(arr[i]);
    }
  }
  return res;
}

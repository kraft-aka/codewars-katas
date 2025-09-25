// Array.prototype.zip = function (arr, fn) {}
// that merges the corresponding elements of two sequences using a
// specified selector function fn (a block in Ruby)

Array.prototype.zip = function (arr, fn) {
  const res = [];
  const min = Math.min(arr.length, this.length);
  for (let i = 0; i < min; i++) {
    const val = fn(this[i], arr[i]);
    res.push(val);
  }
  return res;
};

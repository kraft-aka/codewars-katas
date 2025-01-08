// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

// Here's an example:

// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()

Array.prototype.reverse = function () {
  let arr = [];
  for (let i = this.length - 1; i >= 0; i--) {
    arr.push(this[i]);
  }
  this.length = 0;
  this.push(...arr);
  return this;
};

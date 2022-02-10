//Given an array of ints length 3, return an array with the elements
// "rotated left" so {1, 2, 3} yields {2, 3, 1}.


function rotateLeft3(nums) {
  var firstItem = nums.shift();
  return nums.concat(firstItem);
};



// Given an array length 1 or more of ints, return the difference between
// the largest and smallest values in the array. Note: the built-in min(v1, v2)
// and max(v1, v2) functions return the smaller or larger of two values.


function bigDiff(nums) {
  var maxNum = Math.max.apply(null,nums);
  var minNum = Math.min.apply(null,nums);
  return maxNum - minNum;
};

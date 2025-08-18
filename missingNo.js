// Find the Missing Number

function missingNo(nums) {
  const arr = [];

  for (let i = 0; i <= nums.length; i++) {
    arr.push(i);
  }

  return arr.filter((i) => !nums.includes(i))[0];
}

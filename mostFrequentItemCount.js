// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5
// The most frequent number in the array is -1 and it occurs 5 times.

function mostFrequentItemCount(collection) {
  if (!collection || !collection.length) return 0;

  let hash = {};

  for (let i of collection) {
    if (!hash[i]) {
      hash[i] = 1;
    } else {
      hash[i]++;
    }
  }
  return Math.max(...Object.values(hash));
}

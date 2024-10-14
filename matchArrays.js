// You have two arrays in this kata, every array contains unique elements only.
// Your task is to calculate number of elements in the first array which are also present in the second array.

function matchArrays(v, r) {
  let count = 0;
  v.forEach((i) => {
    if (r.includes(i)) {
      count++;
    }
  });
  return count;
}

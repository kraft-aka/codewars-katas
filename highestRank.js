// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  let m = arr.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  let max = Math.max(...Object.values(m));
  let res = Object.entries(m)
    .filter(([k, v]) => v === max)
    .flat();
  return res.length === 2 ? +res[0] : +res.at(-2);
}

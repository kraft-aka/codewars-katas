// Simple Fun #237: Suffix Sums

function suffixSums(a) {
  const arr = [];

  for (let i = 0; i < a.length; i++) {
    let curr = a.slice(i);
    let sum = 0;
    for (let j of curr) {
      sum += j;
    }
    arr.push(sum);
  }
  return arr;
}

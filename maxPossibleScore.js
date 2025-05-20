// maxPossibleScore

// input:
// questions => {"a": 1, "b": 2, "c": 3}
// new       => ["a", "c"]
// output:
// 1 * 2 + 2 + 3 * 2 = 10

function maxPossibleScore(obj, arr) {
  return Object.entries(obj)
    .map(([k, v]) => (arr.includes(k) ? v * 2 : v))
    .reduce((a, b) => a + b, 0);
}

//Simple Fun #246: Array Center

function arrayCenter(a) {
  let min = Math.min(...a);
  let avg = a.reduce((a, b) => a + b, 0) / a.length;
  return a.filter((i) => Math.abs(i - avg) < min);
}

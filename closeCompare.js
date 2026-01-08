// Compare within margin

function closeCompare(a, b, margin = 0) {
  if (margin >= Math.abs(a - b)) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
}

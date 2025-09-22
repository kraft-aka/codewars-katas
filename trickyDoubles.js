// Tricky Doubles

function trickyDoubles(n) {
  if (n < 10) return n * 2;
  let str = n + "";
  if (str.length % 2 === 0) {
    const half = str.length / 2;
    if (str.slice(0, half) == str.slice(half)) {
      return n;
    }
  }
  return n * 2;
}

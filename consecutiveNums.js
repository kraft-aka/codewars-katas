// How many consecutive numbers are needed?

function consecutive(arr) {
  let missed = 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missed++;
    }
  }
  return missed;
}

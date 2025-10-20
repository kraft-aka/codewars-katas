// If you can't beat 'em, join 'em!
// cantBeatSoJoin([[1,2], [3,4], [5,6], [7,8], [9]]) -> [7, 8, 5, 6, 9, 3, 4, 1, 2]

function cantBeatSoJoin(numbers) {
  const gangTotal = (gang) => gang.reduce((total, num) => total + num, 0);
  return [...numbers].sort((a, b) => gangTotal(b) - gangTotal(a)).flat();
}

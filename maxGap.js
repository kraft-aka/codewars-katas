function maxGap(numbers) {
  let gaps = [];
  numbers.sort((a, b) => b - a);

  for (let i = 0; i < numbers.length - 1; i++) {
    gaps.push(numbers[i] - numbers[i + 1]);
  }
  return Math.max(...gaps);
}

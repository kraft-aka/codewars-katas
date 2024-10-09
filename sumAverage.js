const sumAverage = (arr) => {
  return Math.floor(
    arr
      .map((i) => i.reduce((a, b) => a + b, 0) / i.length, [])
      .reduce((a, b) => a + b, 0)
  );
};

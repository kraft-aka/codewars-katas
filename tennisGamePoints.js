function tennisGamePoints(score) {
  const points = {
    love: 0,
    15: 1,
    30: 2,
    40: 3,
  };

  let res = 0;
  const [p1, p2] = score.split("-");

  if (p2 === "all") {
    res = 2 * points[p1];
  } else {
    res = (points[p1] || 0) + (points[p2] || 0);
  }

  return res;
}

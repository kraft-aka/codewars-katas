// Count up the points for the 7 Wonders board game! Easy version

function solve(c, g, t) {
  let points = 0;
  let sumPoints = 0;
  let sets = Math.min(c, g, t);
  points += sets * 7;
  sumPoints = c ** 2 + g ** 2 + t ** 2;
  return points + sumPoints;
}

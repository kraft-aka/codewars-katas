// Find your caterer

function findCaterer(b, p) {
  if (p === 0) return -1;
  let premCost = 0;
  if (p > 60) {
    premCost = p * 30 * 0.8;
  } else {
    premCost = p * 30;
  }
  if (b >= premCost) return 3;
  if (b >= p * 20) return 2;
  if (b >= p * 15) return 1;
  return -1;
}

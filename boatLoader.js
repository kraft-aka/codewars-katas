// Noye's Fludde

function boatLoader(a) {
  const counts = a
    .filter((i) => typeof i === "string")
    .sort()
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  return Object.entries(counts)
    .filter(([k, v]) => v >= 2)
    .map(([i]) => [i, i])
    .sort(([a], [b]) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

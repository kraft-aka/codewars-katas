function hydrate(s) {
  const numsOfGlasses = s
    .replace(/[a-z]/g, "")
    .split("")
    .map((i) => parseInt(i))
    .filter(Boolean)
    .reduce((a, b) => a + b, 0);
  return numsOfGlasses == 1
    ? "1 glass of water"
    : `${numsOfGlasses} glasses of water`;
}

// Quicksum

function quicksum(p) {
  return /^[A-Z\s]*$/.test(p)
    ? [...p]
        .filter((i) => i.toUpperCase() && i.match(/[A-Z ]/))
        .map((el, i) =>
          el === " "
            ? (el.charCodeAt(0) - 64 + 1) * (i + 1)
            : (el.charCodeAt(0) - 64) * (i + 1)
        )
        .filter((i) => i > 0)
        .reduce((a, b) => a + b, 0)
    : 0;
}

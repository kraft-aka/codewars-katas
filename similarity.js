// Simple Fun #138: Similarity

function similarity(a, b) {
  const isPresentInBoth = a.filter((i) => b.includes(i)).length;
  const isPresentInOne = new Set([...a, ...b]).size;
  return isPresentInBoth / isPresentInOne;
}

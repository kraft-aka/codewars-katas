// If every member of set A is also a member of set B, then A is said to be a subset of B, written A ⊆ B (also pronounced "A is contained in B"). Equivalently, we can write B ⊇ A, read as "B is a superset of A", "B includes A", or "B contains A".

// Example:
//   {1, 3} ⊆ {1, 2, 3, 4}.
//   {1, 2, 3, 4} ⊆ {1, 2, 3, 4}.

//   {1, 2, 3, 4} ⊇ {1, 3}.
//   {1, 2, 3, 4} ⊇ {1, 2, 3, 4}.

function isSubsetOf(s1, s2) {
  return [...s1].every((i) => s2.has(i));
}

function isSupersetOf(s1, s2) {
  return [...s2].every((i) => s1.has(i));
}

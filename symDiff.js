// Playing with Sets : Symmetric difference

function symDiff(s1, s2) {
  const d1 = [...s1].filter((i) => ![...s2].includes(i));
  const d2 = [...s2].filter((i) => ![...s1].includes(i));
  return new Set([...d1, ...d2]);
}

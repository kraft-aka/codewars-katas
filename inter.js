// Playing with Sets : Intersection

function inter(s1, s2) {
  return new Set([...s1].filter((i) => [...s2].includes(i)));
}

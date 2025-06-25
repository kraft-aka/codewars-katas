// Playing with Sets : Complement

function diff(s1, s2) {
  return new Set([...s1].filter((i) => !s2.has(i)));
}

// Write a function which maps a function over the lists in a list:

// function gridMap(fn,xss) { return [[]]; }

function gridMap(fn, a) {
  return a.map((i) => i.map((j) => fn(j)));
}

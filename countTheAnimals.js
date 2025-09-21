// Binary Zoo

function countTheAnimals(a) {
  return Object.values(a).reduce((curr, val) => curr + parseInt(val, 2), 0);
}

// Sorting Arrays

// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

function sortArray(a1, a2) {
  const indexes = a1.reduce((acc, w, idx) => {
    acc[w[0]] = idx;
    return acc;
  }, {});
  return [...a2].sort((a, b) => indexes[a[0]] - indexes[b[0]]);
}

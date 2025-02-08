// Summary
// Given a Hash made up of keys and values, invert the hash by swapping them.

// Examples
// Given:

//   { a: '1',
//     b: '2',
//     c: '3' }

// Return:

//   { 1: 'a',
//     2: 'b',
//     3: 'c' }

// Given:

//   { foo:   'bar',
//     hello: 'world' }

// Return:

//   { bar:   'foo',
//     world: 'hello' }

function invertHash(hash) {
  const invertedHash = {};
  const k = Object.keys(hash);
  const v = Object.values(hash);
  v.forEach((key, i) => (invertedHash[key] = k[i]));
  return invertedHash;
}

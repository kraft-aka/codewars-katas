// Chess piece values
// const hash = Object.freeze({
//   queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
// });

function piecesValue(arr, s) {
  let values = 0;
  const getPieces = arr
    .flat(Infinity)
    .filter((p) => p.startsWith(s[0]))
    .map((i) => i.slice(2));
  for (let p of getPieces) {
    if (Object.keys(hash).includes(p)) {
      values += hash[p];
    }
  }
  return values;
}

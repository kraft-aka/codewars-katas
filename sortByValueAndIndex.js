function sortByValueAndIndex(array) {
  return array
    .map((el, idx) => [el * (idx + 1), el])
    .sort((a, b) => a[0] - b[0])
    .map((el) => el[1]);
}

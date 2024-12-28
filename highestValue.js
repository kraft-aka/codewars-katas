function highestValue(a, b) {
  let strA = [...a].map((i) => i.charCodeAt(0)).reduce((a, b) => a + b, 0);
  let strB = [...b].map((i) => i.charCodeAt(0)).reduce((a, b) => a + b, 0);
  if (strA > strB) {
    return a;
  } else if (strA === strB) {
    return a;
  } else {
    return b;
  }
}

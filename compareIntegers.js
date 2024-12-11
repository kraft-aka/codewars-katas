function compareIntegers(a, b) {
  if (BigInt(a) < BigInt(b)) {
    return "less";
  } else if (BigInt(a) > BigInt(b)) {
    return "greater";
  } else {
    return "equal";
  }
}

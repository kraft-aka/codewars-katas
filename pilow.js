// Pillow on the Fridge

function pillow(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[0][i] === "n" && s[1][i] === "B") {
      return true;
    }
  }
  return false;
}

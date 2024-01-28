// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const idx = alphabet.indexOf(current);
    if (idx !== -1) {
      const newIdx = (idx + 10) % 26;
      str += alphabet[newIdx];
    } else {
      str += current;
    }
  }
  return str;
}

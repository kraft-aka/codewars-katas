// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful.
// Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.

function battle(x, y) {
  const al = [
    " ",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const totalX = x
    .split("")
    .map((i) => al.indexOf(i))
    .reduce((a, b) => a + b, 0);
  const totalY = y
    .split("")
    .map((i) => al.indexOf(i))
    .reduce((a, b) => a + b, 0);
  if (totalX > totalY) return x;
  if (totalX < totalY) return y;
  return "Tie!";
}

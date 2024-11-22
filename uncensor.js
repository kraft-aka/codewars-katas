// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

// Fortunately, I discovered that the virus hides my censored letters inside root directory.

// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

// Examples
// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"

// uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"

// uncensor("xyz", "") ➜ "xyz"

function uncensor(infected, discovered) {
  let recoveredWord = "";
  let index = 0;

  for (let i = 0; i < infected.length; i++) {
    if (infected[i] !== "*") {
      recoveredWord += infected[i];
    } else {
      recoveredWord += discovered[index];
      index++;
    }
  }
  return recoveredWord;
}

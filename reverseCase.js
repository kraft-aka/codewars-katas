// Case Reversal of Consecutive Duplicates

// "puzzles" --> "puZZles"

const reverseCase = (str) =>
  str.replace(/([a-zA-Z])\1+/g, (match) =>
    match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase()
  );

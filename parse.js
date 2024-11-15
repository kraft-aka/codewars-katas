// Create a parser to interpret and execute the Deadfish language.

// Deadfish operates on a single value in memory, which is initially set to 0.

// It uses four single-character commands:

// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.

// Examples
// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

function parse(data) {
  let initialValue = 0,
    output = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      initialValue++;
    } else if (data[i] === "d") {
      initialValue--;
    } else if (data[i] === "s") {
      initialValue = initialValue * initialValue;
    } else if (data[i] === "o") {
      output.push(initialValue);
    }
  }
  return output;
}

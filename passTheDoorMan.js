// The Club Doorman will give you a word. To gain access, you need to provide the right number according to the given word.

// Each word contains exactly one pair of consecutive identical letters, such as the tt in lettuce.

// To determine the number, find the position of the repeated letter in the alphabet (where a is 1, b is 2, ..., z is 26) and multiply it by 3.

// TASK
// Implement a function that takes a word as input and returns the correct number.

// EXAMPLE
// For the word lettuce, the repeated letter is t, which is the 20th letter in the alphabet.

// The correct answer is 20 × 3 = 60.

// NOTE

function passTheDoorMan(word) {
  return (word.match(/(.)\1+/g)[0][0].charCodeAt(0) - 96) * 3;
}

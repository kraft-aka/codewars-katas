// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


function position(letter){
  const alphabet = " abcdefghijklmnopqrstuvwxyz"
  return `Position of alphabet: ${alphabet.indexOf(letter)}`;
  }

  console.log(position('h'))
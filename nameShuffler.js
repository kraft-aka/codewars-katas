// Write a function that returns a string in which firstname is
// swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  const f_lNames = str.split(" ");
  return `${f_lNames[1]} ${f_lNames[0]}`;
}


console.log(nameShuffler('John Doe'));
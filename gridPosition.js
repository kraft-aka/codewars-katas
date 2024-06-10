// Problem Description:

// As a MotoGP commentator, you're tasked with interpreting qualifying results to
// determine each racer's starting
// position on the grid. The grid is organized into rows of three racers each, with
// positions within a row not aligned. Every rider in a row starts a little forward
// from the next rider. The lowest position number marks the top of the row, while
// the highest indicates the bottom, with the middle position between them.

// Write a function that takes the name of a racer and their qualifying position as
// input and returns a string indicating their starting position on the grid.

// Example grid: https://images.app.goo.gl/ogBU5QvvK6vd5k2j9

// Function Specifications:

// Input: A string representing the racer's name and an integer indicating their
// qualifying position.
// Output: A string describing the racer's starting position on the grid in the
// specified format.

// Example Input: 'Valentino Rossi', 11
// Example Output: 'Valentino Rossi starts from the middle of the 4th row

// Exceptions:

// If position is 1 then the text should be '[Rider Name] starts from pole position'
// If the racer qualifies in the 1st row, the output should use "front row" instead.
// Example Input: 'Jorge Martin, 2
// Example Output: 'Jorge Martin starts from the middle of the front row'

// Don't worry about validating the input. Rider name is always a string. Position
// is a number between 1 and 20 included.

const gridPosition = (name, position) => {
  let row = Math.ceil(position / 3);
  let pos = null;

  if (position == 2) {
    pos = "middle";
  } else if (position % 3 == 0) {
    pos = "bottom";
  } else if (position % 3 == 2) {
    pos = "middle";
  } else if (position % 3 == 1) {
    pos = "top";
  }

  if (row == 1) {
    row = "front";
  } else if (row == 2) {
    row = `${row}nd`;
  } else if (row == 3) {
    row = `${row}rd`;
  } else {
    row = `${row}th`;
  }

  if (position == 1) {
    return `${name} starts from pole position`;
  }

  return `${name} starts from the ${pos} of the ${row} row`;
};

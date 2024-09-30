// You are a skier (marked below by the X). You have made it to the Olympics! Well done.

// \_\_\_X\_
// \*\*\*\*\*\
// \*\*\*\*\*\*\
// \*\*\*\*\*\*\*\
// \*\*\*\*\*\*\*\*\
// \*\*\*\*\*\*\*\*\*\\.\_\_\_\_/
// Your job in this kata is to calculate the maximum speed you will achieve during your downhill run. The speed is dictated by the height of the mountain. Each element of the array is a layer of the mountain as indicated by the diagram above (and further below). So for this example the mountain has a height of 5 (5 rows of stars). Speed is mountain height * 1.5.

// The jump length is calculated by (mountain height * speed * 9) / 10. Jump length should be rounded to 2 decimal places.

// You must return the length of the resulting jump as a string in the following format:

// when less than 10 m: "X metres: He's crap!"
// between 10 and 25 m: "X metres: He's ok!"
// between 25 and 50 m: "X metres: He's flying!"
// when more than 50 m: "X metres: Gold!!"
// So in the example case above, the right answer would be "33.75 metres: He's flying!"

// Sadly, it takes a lot of time to make arrays look like mountains, so the tests wont all look so nice. To give an example, the above mountain would look as follows in most cases:

// [*****, ******, *******, ********, *********]

function skiJump(mountain) {
  const speed = mountain.length * 1.5;
  const len = ((mountain.length * speed * 9) / 10).toFixed(2);
  if (len < 10) {
    return `${len} metres: He's crap!`;
  } else if (len >= 10 && len <= 25) {
    return `${len} metres: He's ok!`;
  } else if (len >= 25 && len < 50) {
    return `${len} metres: He's flying!`;
  } else {
    return `${len} metres: Gold!!`;
  }
}

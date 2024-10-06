// Given an array of strings and a character to be used as border, output the frame with the content inside.

// Notes:

// Always keep a space between the input string and the left and right borders.
// The biggest string inside the array should always fit in the frame.
// The input array is never empty.
// Example
// frame(['Create', 'a', 'frame'], '+')

// Output:

// ++++++++++
// + Create +
// + a      +
// + frame  +
// ++++++++++

const frame = (text, char) => {
  const first = [...text].sort((a, b) => b.length - a.length)[0];
  let res = char.repeat(first.length + 4) + "\n";
  for (let i = 0; i < text.length; i++) {
    res += char + " " + text[i].padEnd(first.length, " ") + " " + char + "\n";
  }
  res += char.repeat(first.length + 4);

  console.log(text, res, char);
  return res;
};

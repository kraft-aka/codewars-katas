// Given a string, you progressively need to concatenate the first character from the
// left and the first character from the right and "1", then the second character from
// the left and the second character from the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// "abcdef"  --> "af1be2cd3"
// "abc!def" --> "af1be2cd3" // same result

function charConcat(string) {
  let left = string.slice(0, Math.floor(string.length) / 2);
  let right = [...string.slice(Math.floor(string.length) / 2)]
    .reverse()
    .join("");
  let concatinated = "";
  for (let i = 0; i < left.length; i++) {
    concatinated += left[i];
    concatinated += right[i];
    concatinated += i + 1;
  }
  return concatinated;
}

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks
// should be treated as if they are a part of the word in this kata.

function reverse(str) {
  return str
    .trim()
    .split(" ")
    .map((word, idx, arr) =>
      idx % 2 !== 0 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

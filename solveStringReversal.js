// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// "our code" => "edo cruo"
// -- Normal reversal without spaces is "edocruo".
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// "your code rocks" => "skco redo cruoy".
// "codewars" => "srawedoc"

function solve(str) {
  const spaceIdx = str
    .split("")
    .map((char, i) => (char === " " ? i : -1))
    .filter((i) => i > -1);
  const reversedStr = str.split(" ").join("").split("").reverse();
  spaceIdx.forEach((i) => reversedStr.splice(i, 0, " "));
  return reversedStr.join("");
}

// Stop gninnipS My sdroW!
// "Hey fellow warriors"  --> "Hey wollef sroirraw"

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => (word.length >= 5 ? [...word].reverse().join("") : word))
    .join(" ");
}

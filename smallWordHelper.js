// Make the small words big!

function smallWordHelper(sentence) {
  return sentence
    .split(" ")
    .map((i) => (i.length <= 3 ? i.toUpperCase() : i.replace(/[aioue]/gi, "")))
    .join(" ");
}

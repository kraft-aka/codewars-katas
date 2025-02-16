// Thinking & Testing : Something capitalized

function testit(s) {
  return s
    .split(" ")
    .map((i) =>
      i.length === 1
        ? i.toUpperCase()
        : i.slice(0, -1) + i.slice(i.length - 1).toUpperCase()
    )
    .join(" ");
}

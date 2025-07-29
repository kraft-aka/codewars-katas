// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

function alienLanguage(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map((i) => i.slice(0, -1) + i[i.length - 1].toLowerCase())
    .join(" ");
}

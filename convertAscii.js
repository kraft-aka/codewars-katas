// ASCII letters from NumberASCII letters from Number

function convert(number) {
  return number
    .match(/.{2}/g)
    .map((i) => String.fromCharCode(i))
    .join("");
}

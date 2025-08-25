// Binary to string
// As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

function binaryToString(binary) {
  return binary
    .split("0b")
    .slice(1)
    .map((b) => String.fromCharCode(parseInt(b, 2)))
    .join("");
}

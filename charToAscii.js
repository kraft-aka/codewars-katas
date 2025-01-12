// Take a string and return a hash with all the ascii values of the characters in the string. Returns nil (Ruby), None (Python) or null (JavaScript) if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

function charToAscii(string) {
  return string.length
    ? string
        .replace(/[^a-z]/gi, "")
        .split("")
        .reduce((acc, val) => {
          acc[val] = val.charCodeAt(0);
          return acc;
        }, {})
    : null;
}

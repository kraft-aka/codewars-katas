// In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

// If a letter is a upper case consonants, replace that character with "Iron".
// If a letter is a lower case consonants or a non-alpha character, do nothing to that character
// If a letter is a upper case vowel, replace that character with "Iron Yard".
// If a letter is a lower case vowel, replace that character with "Yard".
// Ready?

function tiyFizzBuzz(s) {
  let res = "";
  for (let char of s) {
    if ("QWRTZPKLJHGFDSBNMVCX".split("").includes(char)) {
      res += "Iron";
    } else if ("AIEOU".split("").includes(char)) {
      res += "Iron Yard";
    } else if ("aieou".split("").includes(char)) {
      res += "Yard";
    } else {
      res += char;
    }
  }
  return res;
}

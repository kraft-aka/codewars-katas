// Egg Talk.

// Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

// Example
// hello => heggeleggleggo

// eggs => egegggeggsegg

// FUN KATA => FeggUNegg KeggATeggA

function heggeleggleggo(word) {
  return word
    .split(" ")
    .map((w) => w.replace(/([^aeiou])/gi, "$1egg"))
    .join(" ");
}
    
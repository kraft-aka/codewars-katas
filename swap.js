// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return [...string]
    .map((el) => (vowels.includes(el) ? el.toUpperCase() : el))
    .join("");
}

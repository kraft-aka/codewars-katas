// The vowel substrings in the word codewarriors are o,e,a,io.
// The longest of these has a length of 2. Given a lowercase string that has alphabetic
// characters only (both vowels and consonants) and no spaces, return the length of the
// longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s) {
  return s.match(/[aeiou]+/g).sort((a, b) => b.length - a.length)[0].length;
}
        
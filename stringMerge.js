// Given two words and a letter, return a single word that's a combination of both words, merged at the point
// where the given letter first appears in each word. The returned word should have the beginning of the first
// word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

function stringMerge(str1, str2, l) {
  const subStr1 = str1.slice(0, str1.indexOf(l));
  const subStr2 = str2.slice(str2.indexOf(l), str2.length);
  return subStr1.concat(subStr2);
}

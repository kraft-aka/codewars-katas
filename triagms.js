// Trigrams are a special case of the n-gram, where n is 3. One trigram is a continous sequence of 3 chars in phrase. Wikipedia

// return all trigrams for the given phrase
// replace spaces with underscore (_)
// return an empty string for phrases shorter than 3
// Example:

// "the quick red" --> "the he_ e_q _qu qui uic ick ck_ k_r _re red"

function trigrams(phrase) {
  let underscorePhrase = phrase.replace(/ /g, "_");

  if (underscorePhrase.length < 3) return "";
  let trigrams = [];

  for (let i = 0; i < underscorePhrase.length - 2; i++) {
    trigrams.push(underscorePhrase.slice(i, i + 3));
  }

  return trigrams.join(" ");
}

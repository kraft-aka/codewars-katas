// Word Challenges at School

function wantedWords(n, m, forbid_let) {
  const matchWord = (word) => {
    const vowels = "aeiou".split("");
    const filterVowels = [...word].filter((i) => vowels.includes(i)).length;
    const consonants = [...word].filter((i) => !vowels.includes(i)).length;
    const notIncluded = [...word].filter((i) => forbid_let.includes(i)).length;
    return filterVowels == n && consonants == m && notIncluded === 0;
  };

  return wordList.filter((i) => matchWord(i));
}

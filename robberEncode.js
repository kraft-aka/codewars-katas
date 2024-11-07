// Introduction
// The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

// The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

// Example
// In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

// 'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
// Note: The dashes - in the example are added for readability and should not be included in the output.

// The Assignment
// Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and returns the result, converted into robber language, as a string.

function robberEncode(sentence) {
  return sentence
    .split("")
    .map((i) => {
      if (
        !["a", "o", "i", "u", "e", "A", "O", "I", "U", "E"].includes(i) &&
        /[a-zA-Z]/.test(i)
      ) {
        if (i === i.toUpperCase()) {
          return i + "O" + i;
        } else if (i === i.toLowerCase()) {
          return i + "o" + i;
        }
      }
      return i;
    })
    .join("");
}

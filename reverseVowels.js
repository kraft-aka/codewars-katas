// Reverse Vowels In A String
// "Hello!" => "Holle!"

function reverseVowels(str) {
  let found = str.match(/[aeiou]/gi);
  const vowels = found ? found.reverse() : [];
  let res = "";
  if (vowels) {
    for (let i = 0; i < str.length; i++) {
      if (!"aeouiAEIUO".includes(str[i])) {
        res += str[i];
      } else {
        res += vowels.shift();
      }
    }
    return res;
  } else {
    return str;
  }
}

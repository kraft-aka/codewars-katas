// Format words into a sentence
// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

function formatWords(words) {
  if (!words || words.length === 0) return "";
  words = words.filter((i) => i !== "");
  if (words.length > 2) {
    const right = words[words.length - 1];
    const left = words.slice(0, -1).join(", ");
    console.log(left + " and " + right);
    return `${left} and ${right}`;
  } else if (words.length === 2) {
    const [left, right] = [...words];
    return `${left} and ${right}`;
  } else {
    return words.join("");
  }
}
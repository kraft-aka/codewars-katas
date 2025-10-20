// Srot the inner ctonnet in dsnnieedcg oredr
// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"

function sortTheInnerContent(words) {
  const sorting = (word) => {
    const arr = [...word];
    const first = word[0];
    const last = word[word.length - 1];
    return arr.length > 2
      ? first + arr.slice(1, -1).sort().reverse().join("") + last
      : arr.join("");
  };
  console.log(words);
  return words
    .split(" ")
    .map((i) => sorting(i))
    .join(" ");
}

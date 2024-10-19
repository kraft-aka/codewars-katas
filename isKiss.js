// KISS - Keep It Simple Stupid

function isKiss(words) {
  const len = words.split(" ").length;
  return words.split(" ").every((word) => word.length <= len)
    ? "Good work Joe!"
    : "Keep It Simple Stupid";
}

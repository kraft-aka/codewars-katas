// String to list of integers.

function stringToIntArray(s) {
  return s
    .split(",")
    .filter((i) => i !== "")
    .map((i) => Number(i));
}

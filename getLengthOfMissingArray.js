// Length of missing array

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.some((i) => !i || i.length === 0))
    return 0;
  let sortedArr = [...arrayOfArrays].map((i) => i.length).sort((a, b) => a - b);
  for (let i = sortedArr[0]; i < sortedArr[sortedArr.length - 1]; i++) {
    if (!sortedArr.includes(i)) {
      return i;
    }
  }
  return 0;
}

// Lost number in number sequence

function findDeletedNumber(arr, mixArr) {
  return arr.filter((i) => !mixArr.includes(i))[0] || 0;
}

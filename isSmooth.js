function isSmooth(arr) {
  let f = arr[0];
  let l = arr[arr.length - 1];
  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    let sum = arr[mid] + arr[mid - 1];
    console.log(sum);
    return sum === f && sum === l;
  } else if (arr.length % 2 !== 0) {
    return arr[mid] === f && arr[mid] === l;
  } else {
    return false;
  }
}

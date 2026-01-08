// Training JS #10: loop statement --for

function pickIt(arr) {
  let odd = [],
    even = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}

// Find Cracker.

function findHack(arr) {
  const scores = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };

  const names = [];

  for (let i = 0; i < arr.length; i++) {
    const sub = arr[i][2];
    const score = arr[i][1];
    const name = arr[i][0];
    let count = 0;
    for (let j = 0; j <= sub.length - 1; j++) {
      if (sub[j] in scores) {
        count += scores[sub[j]];
      }
    }
    if (sub.join("").match(/^[AB]*$/)) {
      count += 20;
    }
    if (count != score || score > 200) {
      names.push(name);
    }
  }
  return names;
}

// Broken sequence

// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

// 0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
// 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

function findMissingNumber(seq) {
  let seqArr = seq.split(" ");
  if (seqArr.some((i) => isNaN(Number(i)))) return 1;
  let e = Math.max(...seqArr.map(Number));

  let arr = [];
  for (let i = 1; i <= e; i++) {
    arr.push(i + "");
  }

  const missing = arr.filter((i) => !seqArr.includes(i));
  if (missing.length === 0) return 0;
  if (missing.length > 1) return +missing[0];
  return +missing[0];
}

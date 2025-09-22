// Shared Bit Counter

function sharedBits(a, b) {
  let binA = a.toString(2);
  let binB = b.toString(2);

  let maxLen = Math.max(binA.length, binB.length);
  binA = binA.padStart(maxLen, "0");
  binB = binB.padStart(maxLen, "0");
  let count = 0;

  for (let i = 0; i < binA.length; i++) {
    if (binA[i] == "1" && binB[i] == "1") {
      count++;
    }
  }
  return count >= 2;
}

// Simple Fun #21: Number Of Clans

// Example
// For divisors = [2, 3] and k = 6, the output should be 4

function numberOfClans(divisors, k) {
  let clans = [];
  for (let i = 1; i <= k; i++) {
    let check = [];
    for (let d of divisors) {
      check.push(i % d === 0);
    }
    clans.push(check);
  }
  return new Set(clans.map((i) => i.map((c) => (c ? "1" : "0")).join(""))).size;
}

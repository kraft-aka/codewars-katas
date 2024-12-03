// Extra perfect number is the number that first and last bits are set bits.

// Task
// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

// Input >> Output Examples
// extraPerfect(3)  ==>  return {1,3}

function extraPerfect(n) {
  let perfectNums = [];

  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      perfectNums.push(i);
    }
  }
  return perfectNums;
}

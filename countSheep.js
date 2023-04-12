// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur:
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative
// integers.

const countSheep = function (num) {
  let sheeps = "";
  if (num == 0) {
    return "";
  } else {
    for (let i = 1; i <= num; i++) {
      sheeps += `${i} sheep...`;
    }
  }

  return sheeps;
};

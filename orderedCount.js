// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  let result = [];
  let counts = {};

  for (let char of text) {
    if (!counts[char]) {
      counts[char] = 1;
      result.push([char, 1]);
    } else {
      counts[char]++;
      for (let item of result) {
        if (item[0] === char) {
          item[1] = counts[char];
          break;
        }
      }
    }
  }
  return result;
};

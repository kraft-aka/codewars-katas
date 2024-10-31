// You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.

function twins(arr) {
  const count = arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
  return (
    Object.keys(count).filter((k) => count[k] === 2).length * 2 === arr.length
  );
}

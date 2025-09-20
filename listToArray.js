// LinkedList -> Array

function listToArray(list) {
  let curr = list;
  const arr = [];
  while (curr !== null) {
    arr.push(curr.value);
    curr = curr.next;
  }
  return arr;
}

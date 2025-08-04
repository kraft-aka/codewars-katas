// Some but not all
// Description
// Your task is to create a function that given a sequence and a predicate, returns True if only some (but not all) the
// elements in the sequence are True after applying the predicate

const someButNotAll = (seq, pred) => {
  let match = false;
  let noMatch = false;

  for (let i of seq) {
    if (pred(i)) {
      match = true;
    } else {
      noMatch = true;
    }
  }
  return match && noMatch;
};

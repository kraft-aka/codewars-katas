// No description!!!

// Input :: [10,20,25,0]

// Output :: ["+0", "+10", "+15", "-10"]

// Show some love, rank and upvote!

function equalize(array) {
  const first = array.at(0);
  return array.map((i) => {
    let res = i - first;
    return res >= 0 ? "+" + res : "" + res;
  });
}

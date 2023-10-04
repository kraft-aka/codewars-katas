// Create a function that takes in the sum and age difference of two people,
// calculates their individual ages, and returns a pair of values
// (oldest age first) if those exist or null/None or {-1, -1} in C if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

function getAges(sum, diff) {
  if (sum < diff || diff < 0) return null;
  const age1 = sum / 2 + diff / 2;
  const age2 = age1 - diff;
  return [age1, age2];
}

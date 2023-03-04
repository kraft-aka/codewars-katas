// In this Kata, you will be given a number, two indexes (index1 and index2)
// and a digit to look for. Your task will be to check if the digit exists
// in the number, within the indexes given.

// Be careful, the index2 is not necessarily more than the index1.

//   index1 == 2 and index2 == 5 -> snippet from 2 to 5 positons;
//   index1 == 5 and index2 == 2 -> snippet from 2 to 5 positons;

//   number.length = 14;

//   0 <= index1 < 14;

//   0 <= index2 < 14;

//   index2 is inclusive in search snippet;

//   0 <= digit <= 9;

const checkDigit = (number, index1, index2, digit) => {
  if (index1 > index2) {
    [index1, index2] = [index2, index1];
  }

  return number
    .toString()
    .slice(index1, index2 + 1)
    .includes(digit.toString());
};

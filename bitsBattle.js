// The odd and even numbers are fighting against each other!

// You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.

// You should return:

// odds win if number of 1s from odd numbers is larger than 0s from even numbers
// evens win if number of 1s from odd numbers is smaller than 0s from even numbers
// tie if equal, including if list is empty
// Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

function bitsBattle(numbers) {
  let odds = [];
  let evens = [];

  if (numbers.length === 0) {
    return "tie";
  }

  numbers.forEach((i) => {
    if (i === 0) {
      return;
    }

    if (i % 2 === 0) {
      const bit = i.toString(2).replace(/1/g, "");
      evens.push(bit);
    } else {
      const bit = i.toString(2).replace(/0/g, "");
      odds.push(bit);
    }
  });

  if (odds.join("").length > evens.join("").length) {
    return "odds win";
  } else if (odds.join("").length < evens.join("").length) {
    return "evens win";
  } else {
    return "tie";
  }
}

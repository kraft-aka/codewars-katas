// Task
// You got a scratch lottery, you want to know how much money you win.

// There are 6 sets of characters on the lottery. Each set of characters represents a chance to win. The text has a coating on it. When you buy the lottery ticket and then blow it off, you can see the text information below the coating.

// Each set of characters contains three animal names and a number, like this: "tiger tiger tiger 100". If the three animal names are the same, Congratulations, you won the prize. You will win the same bonus as the last number.

// Given the lottery, returns the total amount of the bonus.

// Input/Output
// [input] string array lottery

// A string array that contains six sets of characters.

// [output] an integer

// the total amount of the bonus.

function scratch(lottery) {
  let total = 0;
  const toObj = (a) => {
    const parts = a.split(" ").slice(" ");
    const keys = parts.slice(0, 3);
    const val = Number(parts[3]);
    return { keys, val };
  };
  const getSameAnimal = ({ keys, val }) => {
    if (keys.every((key) => key === keys[0])) {
      total += val;
    }
  };
  lottery.map(toObj).forEach(getSameAnimal);
  return total;
}

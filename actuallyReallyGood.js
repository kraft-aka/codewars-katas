// Task:
// Given an array containing a list of good foods, return a string containing the assertion that any two of the individually good foods are really good when combined.

// eg: "You know what's actually really good? Pancakes and relish."

// Examples:
// Good_foods = ["Ice cream", "Ham", "Relish", "Pancakes", "Ketchup", "Cheese", "Eggs", "Cupcakes", "Sour cream", "Hot chocolate", "Avocado", "Skittles"]

// actuallyReallyGood( Good_foods ) #  "You know what's actually really good? Pancakes and relish."

// actuallyReallyGood( ['Peanut butter'] ) #  "You know what's actually really good? Peanut butter and more peanut butter."

// actuallyReallyGood( [] ) #  "You know what's actually really good? Nothing!"

function actuallyReallyGood(foods) {
  const capitalize = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  if (foods.length === 1) {
    return `You know what's actually really good? ${capitalize(
      foods[0]
    )} and more ${foods[0].toLowerCase()}.`;
  } else if (foods.length === 2) {
    const first = foods[0];
    const second = foods[1].toLowerCase();
    return `You know what's actually really good? ${capitalize(
      first
    )} and more ${second}.`;
  } else if (foods.length > 2) {
    const first = foods[0].toLowerCase();
    const second = foods[foods.length - 1].toLowerCase();

    return `You know what's actually really good? ${capitalize(
      first
    )} and more ${second}.`;
  } else {
    return "You know what's actually really good? Nothing!";
  }
}

// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items.
// If any of these items are "Fire" you must spring into action.
// Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

function fireFight(s) {
  //word to search in a string
  const search = "Fire";
  // convert string to array
  let arr = s.split(" ");
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // check if an item in array equal to search item
    if (arr[i] === search) {
      // if it is, change it
      arr[i] = "~~";
    }
  }
  // return string
  return arr.join(" ");
}

console.log(
  fireFight(
    fireFight(
      "Boat Rudder Mast Boat Hull Water Fire Boat \
Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
    )
  )
);

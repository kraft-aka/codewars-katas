// Failed Filter - Bug Fixing #3
// Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to
// remove all the numbers from the string.

const FilterNumbers = (str) => {
  return str
    .split("")
    .filter((c) => c.replace(/[0-9]/g, ""))
    .join("");
};

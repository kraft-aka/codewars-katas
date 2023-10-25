// The notorious Captain Schneider has given you a very straight forward mission.
// Any data that comes through the system make sure that only non-special characters see the light of day.

// Create a function that given a string, retains only the letters A-Z (upper and lowercase),
// 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.

function nothingSpecial(str) {
  return typeof str === "string"
    ? str.replace(/[^a-zA-Z0-9\s]/g, "")
    : "Not a string!";
}

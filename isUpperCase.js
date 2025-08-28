// Is the string uppercase?
// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function () {
  return Object.values(this).every((l) => l === l.toUpperCase());
};

// One suggestion to build a satisfactory password is to start with a
// memorable phrase or sentence and make a password by extracting the
// first letter of each word.

// Even better is to replace some of those letters with numbers
// (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

function makePassword(ph) {
  // Your code here
  const obj = {
    i: 1,
    o: 0,
    s: 5,
    I: 1,
    O: 0,
    S: 5,
  };
  return ph
    .split(" ")
    .map((i) => i[0])
    .join("")
    .replace(/[ios]/gi, (matched) => obj[matched]);
}

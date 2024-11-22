// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s.

// For any given binary number,formatted as a string, return the Ones' Complement of that number.

// Examples
// "0"    -> "1"
// "1"    -> "0"
// "000"  -> "111"
// "1001" -> "0110"
// "1001" -> "0110"

function onesComplement(n) {
  if (n.lentgth === 1) {
    if (n === "0") {
      return "1";
    } else {
      return "0";
    }
  } else {
    return n
      .split("")
      .map((i) => (i === "0" ? "1" : "0"))
      .join("");
  }
}

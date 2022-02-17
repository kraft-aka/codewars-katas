// This kata is about converting numbers to their binary or hexadecimal representation:
//
// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.


function evensAndOdds(num){
  //convert num to binary
  if(num % 2 == 0) {
    return num.toString(2); // to.String(2)
  }
  // convert num to hex
  else {
    return num.toString(16); //toString(16)
  }
}

// In this easy kata your function has to take a string as input and return a string with everything removed (whitespaces included) but the digits. As you may have guessed empty strings are to be returned as they are & if the input string contains no digits then the output will be an empty string.By the way , you have to watch out for non-string inputs too.Return 'Invalid input !' for them.

// digit_all("are_you_kidding_me_???") --------------> ''
// digit_all("wai8, where are you goin'?") ----------> '8'
// digit_all("") ------------------------------------> ''
// digit_all(['yes','i','am','kidding','you','!']) --> 'Invalid input !'
// digit_all("1 2 3       4") -----------------------> '1234'
// Good luck!

function digitAll(x) {
  if (x == null || typeof x !== "string") {
    return "Invalid input !";
  } else if (x.length === 0) {
    return "";
  } else if (isNaN(x)) {
    return x.trim().replace(/[^0-9]/gi, "");
  } else {
    return x.trim();
  }
}

// 1 pa 4 vo 7 ze
// 2 re 5 mu 8 bi 0 no
// 3 ci 6 xa 9 so
// Larger numbers are created by gluing the digits together. For example, 123 is pareci.

// Write a program that reads in a Lojban string (representing a number less than or equal to 1,000,000) and outputs it in numbers.

// Example:
// renonore  # Lojban string
// 2002  # Number

function convertLojban(lojban) {
  const numObj = {
    pa: 1,
    re: 2,
    ci: 3,
    vo: 4,
    mu: 5,
    xa: 6,
    ze: 7,
    bi: 8,
    so: 9,
    no: 0,
  };
  return +lojban
    .match(/.{1,2}/g)
    .map((el, i, arr) => numObj[arr[i]])
    .join("");
}

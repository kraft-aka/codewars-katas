// Rules
// You must check if some ticket numbers are valid.
// To be valid, a ticket number must :

// Contain exactly 6 characters
// Contain : one letter then one digit then 4 letters
// 'letter' means a single character, unaccented, uppercase or
// lowercase, between a and z.

// Input arguments
// tickets : an array of string, representing ticket numbers
// Return value
// An integer representing the number of valid ticket numbers.

function nbrValidTickets(tickets) {
  let arr = [];
  for (let i = 0; i < tickets.length; i++) {
    if (
      tickets[i].length === 6 &&
      /^[a-zA-Z]$/.test(tickets[i][0]) &&
      /^[0-9]$/.test(tickets[i][1]) &&
      /^[a-zA-Z]{4}$/.test(tickets[i].slice(2))
    ) {
      arr.push(tickets[i]);
    }
  }
  return arr.length;
}

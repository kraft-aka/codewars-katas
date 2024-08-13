// You are walking on the sidwalk, you notice your friend is also walking on the sidewalk. You need to give a shout to your friend in order to grab their attention.

// Kata
// Write the function madShout that takes a string input sidewalk to calculate the shout string and return it.

// The shout phrase is "Oi F!" but depending on the distance between your friend, the word expands.

// Example for input 'sidewalk'
// '---------Y-----F------------'

// Y = You
// F = Friend
// 'Shout' phrase:
// Since in the example, the difference between the friends is 6 (F's index is 15 & that of Y's is 9), the shout phrase becomes 'Oiii F!'

// Consider the following differences and its output:
// Difference is 4 => 'Oii F!'
// 2 => 'Oi F!'
// 9 => 'Oiiiii F!'
// 0 => 'Oi F!'
// 1 => 'Oi F!'
// 20 => 'Oiiiiiiiiii F!'

function madShout(sidewalk) {
  const you = sidewalk.indexOf("Y");
  const friend = sidewalk.indexOf("F");
  const diff = friend - you;
  const i = "i".repeat(Math.ceil(diff / 2));
  return `O${i} F!`;
}

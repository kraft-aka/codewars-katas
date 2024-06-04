// Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is
// by substituting the @ and . characters for their literal equivalents in brackets.

// Example 1:

// user_name@example.com
// => user_name [at] example [dot] com
// Example 2:

// af5134@borchmore.edu
// => af5134 [at] borchmore [dot] edu
// Example 3:

// jim.kuback@ennerman-hatano.com
// => jim [dot] kuback [at] ennerman-hatano [dot] com

obfuscate = function (email) {
  let res = "";
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      res += " [at] ";
    } else if (email[i] == ".") {
      res += " [dot] ";
    } else {
      res += email[i];
    }
  }
  return res;
};

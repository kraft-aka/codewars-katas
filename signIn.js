u;
// Validate Passwords

const passes = [];
var signIn = function (newPassword) {
  passes.push(newPassword);
};
var logIn = function (password) {
  return passes.includes(password);
};

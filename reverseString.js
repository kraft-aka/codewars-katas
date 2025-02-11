// Create a function called reverse for the String prototype that will allow the following functionality:

// "String".reverse();// => returns "gnirtS"
// "Super awesome string".reverse();// => returns "gnirts emosewa repuS"

//Create reverse function for the String prototype
String.prototype.reverse = function () {
  const arr = [...this];
  let res = [];

  for (let i = arr.length; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res.join("");
};

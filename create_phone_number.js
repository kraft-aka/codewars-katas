/* Write a function that accepts an array of 10 integers (between 0 and 9), that
 returns a string of those numbers in the form of a phone number.
 EXAMPLE:
 createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"*/

 function createPhoneNumber(numbers){
  //array to string
  let text = numbers.join("");

  //first three digits with ()
  let firstThree = text.slice(0,3);

  // middle three digits
  let midThree = text.slice(3,6);

  //last digits
  let lastDigits = text.slice(6);

  //combine all and return
  return "(" + firstThree + ")"+ " "+ midThree + "-" + lastDigits;
};

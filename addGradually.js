// This kata is all about adding numbers.

// You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??

// Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

//   add(3,4,5);
//   /*
//   returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
//   */

function add() {
  let args = [...arguments];
  let res = 0;

  for (let i = 0; i < args.length; i++) {
    res += args[i] * (i + 1);
  }
  return res;
}

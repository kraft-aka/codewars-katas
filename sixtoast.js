// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
//
// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
//
// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):
//
// six_toast(12) == 6


function sixToast(num) {
  // set a counter
  let toastCount = 6;
  
  if (toastCount < num) {
    return num - toastCount ;
  } else if(toastCount > num) {
    return toastCount - num;
  } else {
    return 0;
  }
}

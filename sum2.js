// Write a single function that can be invoked by either

// ```javascript

// sum(2,3); //5 //or sum(2)(3); //5```

// clojure (sum 2 3) ;; 5 ;;or ((sum 2) 3) ;; 5

// Both of these examples should return the sum of the 2 numbers.

const sum = (a, b) => {
  if (b !== undefined) {
    return a + b;
  } else {
    return (b) => a + b;
  }
};

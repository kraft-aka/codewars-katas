// Count the number of exclamation marks and question marks, return the product.

// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20

function product(string) {
  let ex = string.replace(/[^!]/g, "").length;
  let qu = string.replace(/[^?]/g, "").length;
  return ex * qu;
}

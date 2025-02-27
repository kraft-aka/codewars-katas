// Description
// Christmas is coming soon. As a programmer, you need to complete a series of tasks to welcome the arrival of Christmas. This time your task is:

// Given an array of functions, where each function returns a single character (with no duplicates). Return a string of the function names separated by commas, which can make the string "Merry Christmas!".

// You can assume that all the necessary functions are provided.

// Example
// funcs = [a, b, c, d, e, f, g, h, i, j, k, l, m]
// /* where:
//     a => "M",  b => "e",  c => "r",  d => "y",  e => "C",
//     f => "h",  g => "i",  h => "s",  i => "t",  j => "m",
//     k => "a",  l => " ",  m => "!"
// */
// // the result should be:
// "a,b,c,c,d,l,e,f,c,g,h,i,j,k,h,m"
// // because:
// a()+b()+c()+c()+d()+l()+e()+f()+c()+g()+h()+i()+j()+k()+h()+m() == "Merry Christmas!"

function merryChristmas(funcs) {
  let str = "Merry Christmas!".split("");
  const funcsObj = {};
  funcs.forEach((f) => (funcsObj[f()] = f.name));
  return str.map((s) => funcsObj[s]).join(",");
}

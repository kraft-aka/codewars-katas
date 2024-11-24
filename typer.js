// Type checking in JavaScript
// Sometimes it could be a good thing to check if an object is of a type T. Lets see this example:

// function doStuff(thing) {
//   return thing.map(function(item) {
//     return item * 2;
//   });
// }
// If we call this function with an array, we get the expected result

// doStuff([1,2,3]) //Array [ 2, 4, 6 ]
// But if someone calls doStuff (ruby do_stuff) with a different type of argument, it will throw an exception, because most likely the argument object won't have a method map defined on it.

// doStuff(3) //TypeError: thing.map is not a function

var typer = (function (TO_BE_DEFINED_BY_YOU) {
  return {
    isNumber: (val) =>
      (typeof val === "number" && !isNaN(val)) ||
      (val instanceof Number && !isNaN(val.valueOf())),
    isString: (val) => val instanceof String || typeof val === "string",
    isArray: (val) => Array.isArray(val),
    isFunction: (val) => typeof val === "function",
    isDate: (val) => val instanceof Date,
    isRegExp: (val) => val instanceof RegExp,
    isBoolean: (val) => typeof val == "boolean" || val instanceof Boolean,
    isError: (val) => val instanceof Error,
    isNull: (val) => typeof val === "null" || !val,
    isUndefined: (val) => typeof val === "undefined",
  };
})(null);

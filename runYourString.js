// Function should accept two arguments:
// arg: any type

// object with properties:

// param: string type.
// func: string type. This string is a body of executable function
// Function should evaluate code of string passed as 'func' with parameter arg passed as argument and return result of execution
// Example:

// var arg = 4,                         // arg for "string" function call
//     obj = {
//       param: 'num',                  // parameter name for function in string
//       func: 'return Math.sqrt(num)'  // function that need call with arg var
//     };

// runYourString(arg, obj)              // we expect it should return 2 which is a result of square root of 4
// ps: Solution of this Kata just fun language trick.

// Usage of this code in production is not recommended.

function runYourString(arg, obj) {
  const { param, func } = obj;
  const runFunction = new Function(param, func);
  return runFunction(arg);
}

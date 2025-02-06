// Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

// Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

// "camel_case" --> "camelCase"
// "zebulans_nightmare" --> "zebulansNightmare"
// "get_string" --> "getString"
// "convert_to_uppercase" --> "convertToUppercase"
// "main" --> "main"

function zebulansNightmare(functionName) {
  if (!functionName.includes("_")) return functionName;
  let arr = functionName.split("_");
  let first = arr[0];
  let camelCased = arr.map((i) => i[0].toUpperCase() + i.substring(1));
  camelCased[0] = first;
  return camelCased.join("");
}

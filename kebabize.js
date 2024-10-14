// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

function kebabize(str) {
  return str
    .replace(/[0-9]/g, "")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

//Your task is to write function factorial.

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Expressive Objects

function evaluate(left, op, right) {
  const leftKey = Object.keys(left)[0];
  const leftAdd = left[leftKey].add.reduce((curr, val) => curr + val, 0);
  const leftSubtract = left[leftKey].subtract.reduce((curr, val) => curr - val);
  const leftMultiply = left[leftKey].multiply.reduce(
    (curr, val) => curr * val,
    1
  );
  const leftDivide = left[leftKey].divide.reduce((curr, val) => curr / val);

  const rightKey = Object.keys(right)[0];
  const rightAdd = right[rightKey].add.reduce((curr, val) => curr + val, 0);
  const rightSubtract = right[rightKey].subtract.reduce(
    (curr, val) => curr - val
  );
  const rightMultiply = right[rightKey].multiply.reduce(
    (curr, val) => curr * val,
    1
  );
  const rightDivide = right[rightKey].divide.reduce((curr, val) => curr / val);

  const calculate = (a, b, c, d, x) => {
    let result = 0;
    if (x === "multiply") {
      result = a * b * c * d;
    } else if (x === "add") {
      result = a + b + c + d;
    } else if (x === "divide") {
      result = a / b / c / d;
    } else {
      result = a - b - c - d;
    }
    return result;
  };
  const leftResult = calculate(
    leftAdd,
    leftSubtract,
    leftMultiply,
    leftDivide,
    leftKey
  );
  const rightResult = calculate(
    rightAdd,
    rightSubtract,
    rightMultiply,
    rightDivide,
    rightKey
  );

  if (op === "multiply") return leftResult * rightResult;
  if (op === "divide") return leftResult / rightResult;
  if (op === "add") return leftResult + rightResult;
  if (op === "subtract") return leftResult - rightResult;
}

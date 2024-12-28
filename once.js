function once(fn) {
  let memo = true;
  return function (...args) {
    if (memo) {
      memo = false;
      return fn(...args);
    }
  };
  return undefined;
}

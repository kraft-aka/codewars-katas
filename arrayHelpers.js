// TODO
Array.prototype.square = function () {
  return this.map((i) => i ** 2);
};

Array.prototype.cube = function () {
  return this.map((i) => i ** 3);
};

Array.prototype.average = function () {
  return this.length ? this.reduce((a, b) => a + b, 0) / this.length : NaN;
};

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

Array.prototype.even = function () {
  return this.filter((i) => i % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((i) => i % 2 !== 0);
};

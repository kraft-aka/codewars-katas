// Array.prototype.ofType = function(type){}
// that will filter an array based on a supplied type.

// For example:

// var arr = [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i];
// arr.ofType(Object) === [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i];
// arr.ofType(RegExp) === [/a-z/];
// arr.ofType(Array) === [[1, 2, 3]];

Object.defineProperty(Array.prototype, "ofType", {
  value: function ofType(type) {
    return this.filter(
      (i) => i != null && (i instanceof type || i.constructor === type)
    );
  },
});

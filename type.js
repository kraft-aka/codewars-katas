// Create a function to return true type of variable, i.e.

// type([]) == 'array'
// type({}) == 'object'
// type('') == 'string'
// type(NaN) == 'number'

function type(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (value instanceof Date) return "date";
  return typeof value;
}

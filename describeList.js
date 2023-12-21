// Write function describeList which returns "empty" if the list is empty or "singleton" if it contains only one element or "longer"" if more.

const describeList = (x) =>
  x.length === 0 ? "empty" : x.length === 1 ? "singleton" : "longer";

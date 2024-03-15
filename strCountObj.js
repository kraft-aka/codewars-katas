// Create a function strCount (takes an object as argument) that will count
// all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

function strCount(obj) {
  let count = 0;
  for (let k in obj) {
    if (typeof obj[k] === "string") {
      count++;
    } else if (typeof obj[k] === "object" && obj[k] !== null) {
      count += strCount(obj[k]);
    } else if (Array.isArray(obj[k])) {
      count += strCount(obj[k]);
    }
  }

  return count;
}

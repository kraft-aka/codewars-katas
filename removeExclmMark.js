// Description:
// Remove all exclamation marks from sentence except at the end.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!!!"
// "!Hi"     ---> "Hi"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi"

function remove(string) {
  let arr = string.split(" ");
  if (arr.length === 1) {
    return arr[0].replace(/^!+/, "");
  }
  let last = arr.pop();
  return arr.slice(0, 1).length >= 1
    ? arr.join(" ").replace(/!/g, "") + " " + last
    : last;
}

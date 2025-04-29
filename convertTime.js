// Given a time in a time format class, return it without year, month and day.

// It should return a string including milliseconds with 3 decimals.

// Example:

// new Date(2016, 2, 8, 16, 42, 59)
// //Should return:
// "16:42:59,000"

function convert(time) {
  const h = time.getHours() + "";
  const m = time.getMinutes() + "";
  const s = time.getSeconds() + "";
  const ms = time.getMilliseconds() + "";
  let fullMs;
  switch (ms.length) {
    case 1:
      fullMs = ms.padStart(3, "0");
      break;
    case 2:
      fullMs = "0" + ms;
      break;
    default:
      fullMs = ms;
  }
  return `${h.length == 2 ? h : h.padStart(2, "0")}:${
    m.length == 2 ? m : m.padStart(2, "0")
  }:${s.length == 2 ? s : s.padStart(2, "0")},${fullMs}`;
}

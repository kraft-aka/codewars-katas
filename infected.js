// The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

// 🗺️ You would be given a map of the world in a type of string:

// string s = "01000000X000X011X0X"

// '0' : uninfected

// '1' : infected

// 'X' : ocean
// ⚫ The virus can't spread in the other side of the ocean.

// ⚫ If one person is infected every person in this continent gets infected too.

// ⚫ Your task is to find the percentage of human population that got infected in the end.

// ☑️ Return the percentage % of the total population that got infected.

// ❗❗ The first and the last continent are not connected!

// 💡 Example:

//  start: map1 = "01000000X000X011X0X"
//  end:   map1 = "11111111X000X111X0X"
//  total = 15
//  infected = 11
//  percentage = 100*11/15 = 73.33333333333333

function infected(s) {
  if (!s.includes("0") && !s.includes("1")) return 0;
  const map = s.includes("X")
    ? s
        .split("X")
        .filter((i) => i != "")
        .map((i) => (i.includes(1) ? i.replaceAll(0, 1) : i))
        .join("")
    : s.includes("1")
    ? s.replaceAll(0, 1)
    : s;
  let total = map.length;
  let infected = map.replaceAll(0, "").length;
  return (100 * infected) / total;
}

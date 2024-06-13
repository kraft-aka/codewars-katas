// Step through my green glass door.

// You can take the moon, but not the sun.

// You can take your slippers, but not your sandals.

// You can go through yelling, but not shouting.

// You can't run through fast, but you can run with speed.

// You can take a sheet, but not your blanket.

// You can wear your glasses, but not your contacts.

// Have you figured it out? Good! Then write a program that can figure it out as well.

function stepThroughWith(s) {
  const doubles = [
    "aa",
    "oo",
    "ee",
    "ii",
    "uu",
    "qq",
    "ww",
    "rr",
    "tt",
    "yy",
    "pp",
    "ss",
    "dd",
    "ff",
    "gg",
    "hh",
    "jj",
    "kk",
    "ll",
    "zz",
    "xx",
    "cc",
    "vv",
    "bb",
    "nn",
    "mm",
  ];

  for (let double of doubles) {
    if (s.includes(double)) {
      return true;
    }
  }
  return false;
}

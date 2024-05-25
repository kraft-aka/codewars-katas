// Your sweet 4 year old niece has sent you a letter, however she is a little bit of an odd ball, so it needs a bit of decoding. You see she
// seems to love dinosars and often throws "trex" and "raptor" in mid sentence when she gets excited, and is convinced all vowels should be replaced by
// numbers

// (a=0, e=1, i=2, o=3, u=4).
// Your challenge is to figure out what she is trying to say and fix her grammar-

// Inputs
// A sentence (string) that may consists of:

// lowercase letters [a-z]
// uppercase letters [A-Z]
// digits [0-4]
// spaces [ ] (The space would only appear between words)
// Notes
// The returned string should begin with a capital letter and end in a full stop / period
// letter i that is alone and not within another word should be capitalised (e.g., "i am", "i want"),
// no need for capitals for names, she's only 4 after all :)

function nonsense(str) {
  let res = "";
  const obj = {
    0: "a",
    1: "e",
    2: "i",
    3: "o",
    4: "u",
  };

  let decoded = str
    .replace(/[01234]/g, (match) => obj[match])
    .replace(/trex/gi, "")
    .replace(/raptor/gi, "")
    .toLowerCase();
  decoded = decoded.replace(/\b[i]\b/g, (match) => match.toUpperCase());
  if (decoded.indexOf(".") == -1) decoded += ".";
  return decoded[0].toUpperCase() + decoded.slice(1);
}

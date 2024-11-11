//Simple Fun #49: Decipher

function decipher(cipher) {
  let output = "";

  for (let i = 0; i < cipher.length; ) {
    let twoNums = Number(cipher.slice(i, i + 2));

    if (twoNums >= 97 && twoNums <= 122) {
      output += String.fromCharCode(twoNums);
      i += 2;
    } else {
      let threeNums = Number(cipher.slice(i, i + 3));
      output += String.fromCharCode(threeNums);
      i += 3;
    }
  }
  return output;
}

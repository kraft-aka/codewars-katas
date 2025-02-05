// What is my name score? #1

function nameScore(name) {
  let count = 0;
  for (let char of name.replace(/\s/g, "")) {
    for (let gr in alpha) {
      if (gr.includes(char.toUpperCase())) {
        count += alpha[gr];
        break;
      }
    }
  }
  return { [name]: count };
}

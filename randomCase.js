// Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

// A few examples:

// randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

// randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs

function randomCase(x) {
  const arr = [...x.toLowerCase()];
  return arr
    .map((letter) => (Math.random() > 0.5 ? letter.toUpperCase() : letter))
    .join("");
}

// Harvest Festival

function plant(seed, water, fert, temp) {
  let plantStr = "";

  if (temp <= 30 && temp >= 20) {
    for (let i = 0; i < water; i++) {
      plantStr += "-".repeat(water);
      plantStr += seed.repeat(fert);
    }
  } else {
    plantStr += "-".repeat(water * water);
    plantStr += seed;
  }
  return plantStr;
}

// Ironman Triathlon

function iTri(s) {
  const total = 2.4 + 112 + 26.2;
  if (s === 0) {
    return "Starting Line... Good Luck!";
  } else if (s > 0 && s <= 2.4) {
    const rest = (total - s).toFixed(2);
    return { Swim: rest + " to go!" };
  } else if (s > 2.4 && s <= 114.4) {
    const rest = (total - s).toFixed(2);
    return { Bike: rest + " to go!" };
  } else if (s > 114.4 && s < total) {
    const rest = (total - s).toFixed(2);
    if (rest <= 10) {
      return { Run: "Nearly there!" };
    }
    return { Run: rest + " to go!" };
  } else {
    return "You're done! Stop running!";
  }
}

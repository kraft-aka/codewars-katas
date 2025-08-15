// Find Your Villain Name

function getVillainName(bd) {
  const m = [
    "Evil",
    "Vile",
    "Cruel",
    "Trashy",
    "Despicable",
    "Embarrassing",
    "Disreputable",
    "Atrocious",
    "Twirling",
    "Orange",
    "Terrifying",
    "Awkward",
  ];
  const d = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];
  const date = new Date(bd);
  const month = date.getMonth();
  const numDate = date.getDate() + "";
  return `The ${m[month]} ${d[numDate.length > 1 ? numDate[1] : numDate]}`;
}

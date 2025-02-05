//Whose bicycle?

function whoseBicycle(d1, d2, d3) {
  const count1 = Object.values(d1).reduce((acc, b) => acc + b, 0);
  const count2 = Object.values(d2).reduce((acc, b) => acc + b, 0);
  const count3 = Object.values(d3).reduce((acc, b) => acc + b, 0);
  if (count1 > count2 && count1 > count3)
    return "I need to buy a bicycle for my first son.";
  if (count2 > count1 && count2 > count3)
    return "I need to buy a bicycle for my second son.";
  if (count3 > count1 && count3 > count2)
    return "I need to buy a bicycle for my third son.";
  if (count1 === count2 && count1 === count3 && count2 === count3)
    return "I need to buy a bicycle for my third son.";
  if (count1 === count2 && count2 !== count3)
    return "I need to buy a bicycle for my second son.";
  if (count2 === count3 && count1 !== count3)
    return "I need to buy a bicycle for my third son.";
}

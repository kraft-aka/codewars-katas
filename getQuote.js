// Batman Quotes

var getQuote = function (quotes, hero) {
  const idx = hero.replace(/[^0-9]/gi, "");
  if (hero.startsWith("R")) {
    return "Robin: " + quotes[idx];
  } else if (hero.startsWith("B")) {
    return "Batman: " + quotes[idx];
  } else {
    return "Joker: " + quotes[idx];
  }
};

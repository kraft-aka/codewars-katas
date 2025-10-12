// Smart Toaster

function toaster(bT) {
  const time = {
    "white bread": "1 min",
    "frozen white bread": "1.5 mins",
    "brown bread": "2 mins",
    "frozen brown bread": "3 mins",
  };
  return time[bT.toLowerCase()] || "Please do not put that in the toaster!";
}

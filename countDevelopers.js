// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  return list.filter(
    (d) => d.continent === "Europe" && d.language === "JavaScript"
  ).length;
}

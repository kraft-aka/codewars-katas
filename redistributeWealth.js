// Wealth equality, finally!

function redistributeWealth(wealth) {
  let total = wealth.reduce((acc, val) => acc + val, 0);
  for (let i = 0; i < wealth.length; i++) {
    wealth[i] = total / wealth.length;
  }
}

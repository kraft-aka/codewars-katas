// Fifa 17 Launch

function fifa(ticket, results) {
  let sum = 0;
  let home = results[0][+0] > results[0][+2];
  let away = results[1][+0] < results[1][+2];
  let draw = results[2][+0] === results[2][+2];
  if (home) {
    sum += Number(ticket["Home"].slice(1));
  }
  if (away) {
    sum += Number(ticket["Away"].slice(1));
  }
  if (draw) {
    sum += Number(ticket["Draw"].slice(1));
  }
  return "£" + sum;
}

// Capitals first!

function capitalsFirst(str) {
  const arr = str.split(" ").sort((a, b) => b - a);
  const upper = arr.filter(
    (i) => i.startsWith(i[0].toUpperCase()) && i.match(/^[a-zA-Z]/g)
  );
  const lower = arr.filter(
    (i) => i.startsWith(i[0].toLowerCase()) && i.match(/^[a-zA-Z]/g)
  );
  return [...upper, ...lower].join(" ");
}

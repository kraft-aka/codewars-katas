// Spanish sentences #1

function spanishSent(arr) {
  const len = arr.filter(
    (i) =>
      (i.startsWith("¡") && i.endsWith("!")) ||
      (i.startsWith("¿") && i.endsWith("?"))
  ).length;
  return len === 1
    ? `¡${len} spanish sentence here and hasta la vista, baby!`
    : `¡${len} spanish sentences here and hasta la vista, baby!`;
}

// Oktober Fest: Bjorg's Got A Drinking Problem

function gameOfFives(b, s) {
  const b5 = b.filter((i) => i === 5).length;
  const s5 = s.filter((i) => i === 5).length;
  return b5 === s5
    ? "Drinks All Round! Free Beers on Bjorg!"
    : "Uh Oh! Bjorg's a donut! No beer for anyone!";
}

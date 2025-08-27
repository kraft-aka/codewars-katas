// Vampire Numbers

function vampireTest(a, b) {
  const total = [...(a + "" + b + "")].sort();
  return (
    String(a * b)
      .split("")
      .sort()
      .join("") === total.join("")
  );
}

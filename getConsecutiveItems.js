// Consecutive Count

function getConsectiveItems(items, key) {
  const regex = new RegExp(`[^${key}]`, "gi");
  const cleaned =
    typeof items != "string"
      ? String(items).replace(regex, "-")
      : items.replace(regex, "-");
  return Math.max(...cleaned.split("-").map((i) => i.length));
}

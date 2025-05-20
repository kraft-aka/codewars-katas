// "How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"

function evenator(str) {
  return str
    .replace(/[^0-9a-zA-Z\s]/g, "")
    .split(" ")
    .map((i) => (i.length % 2 !== 0 ? i + (i[i.length - 1] || i) : i))
    .join(" ");
}

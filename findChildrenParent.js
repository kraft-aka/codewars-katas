// Where is my parent!?(cry)
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dB) {
  return [...dB]
    .sort((a, b) => a.localeCompare(b, "en-US", { caseFirst: "upper" }))
    .join("");
}
